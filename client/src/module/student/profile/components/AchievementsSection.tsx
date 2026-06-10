
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
C
a
l
e
n
d
a
r
,
 
P
e
n
c
i
l
,
 
P
l
u
s
,
 
T
r
o
p
h
y
,
 
T
r
a
s
h
2
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
i
n
p
u
t
C
l
a
s
s
,
 
l
a
b
e
l
C
l
a
s
s
 
}
 
f
r
o
m
 
"
.
/
s
t
y
l
e
s
"
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
A
c
h
i
e
v
e
m
e
n
t
s
S
e
c
t
i
o
n
(
{
 
a
c
h
i
e
v
e
m
e
n
t
s
,
 
o
n
C
h
a
n
g
e
,
 
e
r
r
o
r
s
 
}
:
 
{


 
 
a
c
h
i
e
v
e
m
e
n
t
s
:
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
[
]
;


 
 
o
n
C
h
a
n
g
e
:
 
(
a
:
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
[
]
)
 
=
>
 
v
o
i
d
;


 
 
e
r
r
o
r
s
?
:
 
s
t
r
i
n
g
[
]
;


}
)
 
{


 
 
c
o
n
s
t
 
[
e
d
i
t
i
n
g
,
 
s
e
t
E
d
i
t
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
d
r
a
f
t
,
 
s
e
t
D
r
a
f
t
]
 
=
 
u
s
e
S
t
a
t
e
<
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
>
(
{
 
i
d
:
 
"
"
,
 
t
i
t
l
e
:
 
"
"
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
"
,
 
d
a
t
e
:
 
"
"
 
}
)
;


 
 
c
o
n
s
t
 
[
d
a
t
e
E
r
r
o
r
,
 
s
e
t
D
a
t
e
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
>
(
"
"
)
;




 
 
c
o
n
s
t
 
s
t
a
r
t
A
d
d
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
a
c
h
i
e
v
e
m
e
n
t
s
.
l
e
n
g
t
h
 
>
=
 
1
0
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
D
a
t
e
E
r
r
o
r
(
"
"
)
;


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
c
r
y
p
t
o
.
r
a
n
d
o
m
U
U
I
D
(
)
;


 
 
 
 
s
e
t
D
r
a
f
t
(
{
 
i
d
,
 
t
i
t
l
e
:
 
"
"
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
"
,
 
d
a
t
e
:
 
"
"
 
}
)
;


 
 
 
 
s
e
t
E
d
i
t
i
n
g
(
i
d
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
t
a
r
t
E
d
i
t
 
=
 
(
a
:
 
A
c
h
i
e
v
e
m
e
n
t
I
t
e
m
)
 
=
>
 
{


 
 
 
 
s
e
t
D
a
t
e
E
r
r
o
r
(
"
"
)
;


 
 
 
 
s
e
t
D
r
a
f
t
(
{
 
.
.
.
a
 
}
)
;


 
 
 
 
s
e
t
E
d
i
t
i
n
g
(
a
.
i
d
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
a
v
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
d
r
a
f
t
.
t
i
t
l
e
.
t
r
i
m
(
)
)
 
r
e
t
u
r
n
;




 
 
 
 
i
f
 
(
d
r
a
f
t
.
d
a
t
e
 
&
&
 
d
r
a
f
t
.
d
a
t
e
.
t
r
i
m
(
)
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
n
e
w
 
D
a
t
e
(
d
r
a
f
t
.
d
a
t
e
.
t
r
i
m
(
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
i
s
V
a
l
i
d
D
a
t
e
 
=
 
!
i
s
N
a
N
(
p
a
r
s
e
d
.
g
e
t
T
i
m
e
(
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
l
o
o
k
s
R
e
a
s
o
n
a
b
l
e
 
=
 
p
a
r
s
e
d
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
 
>
=
 
1
9
0
0
 
&
&
 
p
a
r
s
e
d
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
 
<
=
 
n
e
w
 
D
a
t
e
(
)
.
g
e
t
F
u
l
l
Y
e
a
r
(
)
 
+
 
1
;


 
 
 
 
 
 
i
f
 
(
!
i
s
V
a
l
i
d
D
a
t
e
 
|
|
 
!
l
o
o
k
s
R
e
a
s
o
n
a
b
l
e
)
 
{


 
 
 
 
 
 
 
 
s
e
t
D
a
t
e
E
r
r
o
r
(
"
P
l
e
a
s
e
 
e
n
t
e
r
 
a
 
v
a
l
i
d
 
d
a
t
e
 
(
e
.
g
.
 
J
u
n
e
 
2
0
2
5
 
o
r
 
2
0
2
4
-
0
6
-
0
1
)
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
}




 
 
 
 
s
e
t
D
a
t
e
E
r
r
o
r
(
"
"
)
;


 
 
 
 
c
o
n
s
t
 
e
x
i
s
t
s
 
=
 
a
c
h
i
e
v
e
m
e
n
t
s
.
f
i
n
d
(
(
a
)
 
=
>
 
a
.
i
d
 
=
=
=
 
d
r
a
f
t
.
i
d
)
;


 
 
 
 
i
f
 
(
e
x
i
s
t
s
)
 
{


 
 
 
 
 
 
o
n
C
h
a
n
g
e
(
a
c
h
i
e
v
e
m
e
n
t
s
.
m
a
p
(
(
a
)
 
=
>
 
(
a
.
i
d
 
=
=
=
 
d
r
a
f
t
.
i
d
 
?
 
d
r
a
f
t
 
:
 
a
)
)
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
o
n
C
h
a
n
g
e
(
[
.
.
.
a
c
h
i
e
v
e
m
e
n
t
s
,
 
d
r
a
f
t
]
)
;


 
 
 
 
}


 
 
 
 
s
e
t
E
d
i
t
i
n
g
(
n
u
l
l
)
;


 
 
}
;




 
 
c
o
n
s
t
 
r
e
m
o
v
e
 
=
 
(
i
d
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
o
n
C
h
a
n
g
e
(
a
c
h
i
e
v
e
m
e
n
t
s
.
f
i
l
t
e
r
(
(
a
)
 
=
>
 
a
.
i
d
 
!
=
=
 
i
d
)
)
;


 
 
 
 
i
f
 
(
e
d
i
t
i
n
g
 
=
=
=
 
i
d
)
 
s
e
t
E
d
i
t
i
n
g
(
n
u
l
l
)
;


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
5
 
p
y
-
5
 
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
{
e
r
r
o
r
s
 
&
&
 
e
r
r
o
r
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
r
e
d
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
p
x
-
1
 
f
o
n
t
-
m
o
n
o
"
>
{
e
r
r
o
r
s
[
0
]
}
<
/
p
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
a
c
h
i
e
v
e
m
e
n
t
s
.
f
i
l
t
e
r
(
(
a
)
 
=
>
 
a
.
i
d
 
!
=
=
 
e
d
i
t
i
n
g
)
.
m
a
p
(
(
a
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
a
.
i
d
}
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
 
p
x
-
4
 
p
y
-
3
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
o
p
h
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
4
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
r
u
n
c
a
t
e
"
>
{
a
.
t
i
t
l
e
}
<
/
h
4
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
1
 
l
i
n
e
-
c
l
a
m
p
-
2
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
a
.
d
e
s
c
r
i
p
t
i
o
n
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
d
a
t
e
 
&
&
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
1
.
5
"
>
{
a
.
d
a
t
e
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
1
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
"
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
t
a
r
t
E
d
i
t
(
a
)
}
 
a
r
i
a
-
l
a
b
e
l
=
"
E
d
i
t
 
a
c
h
i
e
v
e
m
e
n
t
"
 
c
l
a
s
s
N
a
m
e
=
"
p
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
8
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
e
n
c
i
l
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
"
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
r
e
m
o
v
e
(
a
.
i
d
)
}
 
a
r
i
a
-
l
a
b
e
l
=
"
D
e
l
e
t
e
 
a
c
h
i
e
v
e
m
e
n
t
"
 
c
l
a
s
s
N
a
m
e
=
"
p
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
r
e
d
-
5
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
T
r
a
s
h
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
{
e
d
i
t
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
4
 
p
y
-
4
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
l
i
m
e
-
7
0
0
/
4
0
 
b
g
-
l
i
m
e
-
5
0
/
4
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
9
0
0
/
5
 
r
o
u
n
d
e
d
-
m
d
 
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
{
l
a
b
e
l
C
l
a
s
s
}
>
T
i
t
l
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
d
r
a
f
t
.
t
i
t
l
e
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
D
r
a
f
t
(
(
d
)
 
=
>
 
(
{
 
.
.
.
d
,
 
t
i
t
l
e
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
)
}
 
c
l
a
s
s
N
a
m
e
=
{
i
n
p
u
t
C
l
a
s
s
}
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
D
e
a
n
'
s
 
L
i
s
t
,
 
H
a
c
k
a
t
h
o
n
 
W
i
n
n
e
r
"
 
m
a
x
L
e
n
g
t
h
=
{
1
0
0
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
{
l
a
b
e
l
C
l
a
s
s
}
>
D
e
s
c
r
i
p
t
i
o
n
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a
 
v
a
l
u
e
=
{
d
r
a
f
t
.
d
e
s
c
r
i
p
t
i
o
n
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
D
r
a
f
t
(
(
d
)
 
=
>
 
(
{
 
.
.
.
d
,
 
d
e
s
c
r
i
p
t
i
o
n
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
)
}
 
c
l
a
s
s
N
a
m
e
=
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
r
e
s
i
z
e
-
n
o
n
e
`
}
 
r
o
w
s
=
{
2
}
 
p
l
a
c
e
h
o
l
d
e
r
=
"
B
r
i
e
f
 
d
e
s
c
r
i
p
t
i
o
n
.
.
.
"
 
m
a
x
L
e
n
g
t
h
=
{
3
0
0
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
{
l
a
b
e
l
C
l
a
s
s
}
>
<
C
a
l
e
n
d
a
r
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
D
a
t
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
d
r
a
f
t
.
d
a
t
e
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
{
 
s
e
t
D
r
a
f
t
(
(
d
)
 
=
>
 
(
{
 
.
.
.
d
,
 
d
a
t
e
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
)
;
 
s
e
t
D
a
t
e
E
r
r
o
r
(
"
"
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
d
a
t
e
E
r
r
o
r
 
?
 
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
b
o
r
d
e
r
-
r
e
d
-
4
0
0
`
 
:
 
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
J
u
n
e
 
2
0
2
5
 
o
r
 
2
0
2
4
-
0
6
-
0
1
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
L
e
n
g
t
h
=
{
2
0
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
t
e
E
r
r
o
r
 
&
&
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
t
e
x
t
-
r
e
d
-
5
0
0
 
m
t
-
1
 
f
o
n
t
-
m
o
n
o
"
>
{
d
a
t
e
E
r
r
o
r
}
<
/
p
>
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
2
 
p
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
s
a
v
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
d
r
a
f
t
.
t
i
t
l
e
.
t
r
i
m
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
p
x
-
4
 
p
y
-
2
 
b
g
-
l
i
m
e
-
4
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
5
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
b
g
-
l
i
m
e
-
3
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
a
v
e


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{
 
s
e
t
D
a
t
e
E
r
r
o
r
(
"
"
)
;
 
s
e
t
E
d
i
t
i
n
g
(
n
u
l
l
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
p
x
-
4
 
p
y
-
2
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
a
n
c
e
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
{
a
c
h
i
e
v
e
m
e
n
t
s
.
l
e
n
g
t
h
 
<
 
1
0
 
&
&
 
!
e
d
i
t
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
s
t
a
r
t
A
d
d
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
3
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
d
a
s
h
e
d
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
 
A
d
d
 
a
c
h
i
e
v
e
m
e
n
t


 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


