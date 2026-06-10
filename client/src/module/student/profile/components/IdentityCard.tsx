
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
R
e
f
 
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


 
 
U
s
e
r
,
 
C
a
m
e
r
a
,
 
L
o
a
d
e
r
2
,
 
G
r
a
d
u
a
t
i
o
n
C
a
p
,
 
M
a
p
P
i
n
,


 
 
L
i
n
k
e
d
i
n
,
 
G
i
t
h
u
b
,
 
G
l
o
b
e
,
 
C
h
e
c
k
,
 
C
o
p
y
,


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
 
{
 
c
a
r
d
C
l
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




i
n
t
e
r
f
a
c
e
 
I
d
e
n
t
i
t
y
C
a
r
d
P
r
o
p
s
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
e
m
a
i
l
:
 
s
t
r
i
n
g
;


 
 
p
r
o
f
i
l
e
P
i
c
:
 
s
t
r
i
n
g
;


 
 
c
o
v
e
r
I
m
a
g
e
:
 
s
t
r
i
n
g
;


 
 
d
e
s
i
g
n
a
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
c
o
m
p
a
n
y
:
 
s
t
r
i
n
g
;


 
 
c
o
l
l
e
g
e
:
 
s
t
r
i
n
g
;


 
 
l
o
c
a
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
l
i
n
k
e
d
i
n
U
r
l
:
 
s
t
r
i
n
g
;


 
 
g
i
t
h
u
b
U
r
l
:
 
s
t
r
i
n
g
;


 
 
p
o
r
t
f
o
l
i
o
U
r
l
:
 
s
t
r
i
n
g
;


 
 
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
:
 
b
o
o
l
e
a
n
;


 
 
u
p
l
o
a
d
i
n
g
P
i
c
:
 
b
o
o
l
e
a
n
;


 
 
u
p
l
o
a
d
i
n
g
C
o
v
e
r
:
 
b
o
o
l
e
a
n
;


 
 
p
r
o
f
i
l
e
U
r
l
C
o
p
i
e
d
:
 
b
o
o
l
e
a
n
;


 
 
u
s
e
r
I
d
:
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
;


 
 
o
n
P
r
o
f
i
l
e
P
i
c
S
e
l
e
c
t
:
 
(
e
:
 
R
e
a
c
t
.
C
h
a
n
g
e
E
v
e
n
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
)
 
=
>
 
v
o
i
d
;


 
 
o
n
C
o
v
e
r
I
m
a
g
e
S
e
l
e
c
t
:
 
(
e
:
 
R
e
a
c
t
.
C
h
a
n
g
e
E
v
e
n
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
)
 
=
>
 
v
o
i
d
;


 
 
o
n
T
o
g
g
l
e
P
u
b
l
i
c
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
o
n
C
o
p
y
P
r
o
f
i
l
e
U
r
l
:
 
(
)
 
=
>
 
v
o
i
d
;


}




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
 
I
d
e
n
t
i
t
y
C
a
r
d
(
{


 
 
n
a
m
e
,


 
 
e
m
a
i
l
,


 
 
p
r
o
f
i
l
e
P
i
c
,


 
 
c
o
v
e
r
I
m
a
g
e
,


 
 
d
e
s
i
g
n
a
t
i
o
n
,


 
 
c
o
m
p
a
n
y
,


 
 
c
o
l
l
e
g
e
,


 
 
l
o
c
a
t
i
o
n
,


 
 
l
i
n
k
e
d
i
n
U
r
l
,


 
 
g
i
t
h
u
b
U
r
l
,


 
 
p
o
r
t
f
o
l
i
o
U
r
l
,


 
 
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
,


 
 
u
p
l
o
a
d
i
n
g
P
i
c
,


 
 
u
p
l
o
a
d
i
n
g
C
o
v
e
r
,


 
 
p
r
o
f
i
l
e
U
r
l
C
o
p
i
e
d
,


 
 
u
s
e
r
I
d
,


 
 
o
n
P
r
o
f
i
l
e
P
i
c
S
e
l
e
c
t
,


 
 
o
n
C
o
v
e
r
I
m
a
g
e
S
e
l
e
c
t
,


 
 
o
n
T
o
g
g
l
e
P
u
b
l
i
c
,


 
 
o
n
C
o
p
y
P
r
o
f
i
l
e
U
r
l
,


}
:
 
I
d
e
n
t
i
t
y
C
a
r
d
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
p
i
c
I
n
p
u
t
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
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
 
c
o
v
e
r
I
n
p
u
t
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
(
n
u
l
l
)
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
{
c
a
r
d
C
l
s
}
>


 
 
 
 
 
 
{
/
*
 
C
o
v
e
r
 
b
a
n
d
 
*
/
}


 
 
 
 
 
 
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
h
-
2
4
 
b
g
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
b
g
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
e
l
a
t
i
v
e
 
g
r
o
u
p
/
b
a
n
n
e
r
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
{
c
o
v
e
r
I
m
a
g
e
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
{
c
o
v
e
r
I
m
a
g
e
}
 
a
l
t
=
"
C
o
v
e
r
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
w
-
f
u
l
l
 
h
-
f
u
l
l
 
o
b
j
e
c
t
-
c
o
v
e
r
"
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
1
]
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:
 
"
r
a
d
i
a
l
-
g
r
a
d
i
e
n
t
(
c
i
r
c
l
e
 
a
t
 
1
p
x
 
1
p
x
,
 
w
h
i
t
e
 
1
p
x
,
 
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
 
0
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
1
8
p
x
 
1
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
a
b
s
o
l
u
t
e
 
t
o
p
-
3
 
r
i
g
h
t
-
3
 
h
-
1
.
5
 
w
-
1
.
5
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
 
c
o
v
e
r
I
n
p
u
t
R
e
f
.
c
u
r
r
e
n
t
?
.
c
l
i
c
k
(
)
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
u
p
l
o
a
d
i
n
g
C
o
v
e
r
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
b
g
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
/
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
9
5
0
/
6
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
5
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
 
o
p
a
c
i
t
y
-
0
 
g
r
o
u
p
-
h
o
v
e
r
/
b
a
n
n
e
r
:
o
p
a
c
i
t
y
-
1
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
o
p
a
c
i
t
y
 
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


 
 
 
 
 
 
 
 
 
 
{
u
p
l
o
a
d
i
n
g
C
o
v
e
r
 
?
 
<
L
o
a
d
e
r
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
5
 
h
-
5
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
:
 
<
C
a
m
e
r
a
 
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
5
 
h
-
5
"
 
/
>
}


 
 
 
 
 
 
 
 
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
i
n
p
u
t
 
r
e
f
=
{
c
o
v
e
r
I
n
p
u
t
R
e
f
}
 
t
y
p
e
=
"
f
i
l
e
"
 
a
c
c
e
p
t
=
"
.
j
p
g
,
 
.
j
p
e
g
,
 
.
p
n
g
"
 
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
o
n
C
o
v
e
r
I
m
a
g
e
S
e
l
e
c
t
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
h
i
d
d
e
n
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
p
x
-
5
 
p
b
-
5
 
-
m
t
-
1
0
 
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
{
/
*
 
A
v
a
t
a
r
 
*
/
}


 
 
 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
 
g
r
o
u
p
 
m
b
-
3
 
w
-
2
0
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
2
0
 
h
-
2
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
 
b
g
-
w
h
i
t
e
 
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
9
0
0
 
b
o
r
d
e
r
-
2
 
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
s
t
o
n
e
-
9
0
0
 
s
h
a
d
o
w
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
P
i
c
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
m
g
 
s
r
c
=
{
p
r
o
f
i
l
e
P
i
c
}
 
a
l
t
=
{
n
a
m
e
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
 
h
-
f
u
l
l
 
o
b
j
e
c
t
-
c
o
v
e
r
"
 
o
n
E
r
r
o
r
=
{
(
e
)
 
=
>
 
{
 
e
.
c
u
r
r
e
n
t
T
a
r
g
e
t
.
s
t
y
l
e
.
d
i
s
p
l
a
y
 
=
 
"
n
o
n
e
"
;
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
w
-
f
u
l
l
 
h
-
f
u
l
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
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
8
 
h
-
8
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
 
p
i
c
I
n
p
u
t
R
e
f
.
c
u
r
r
e
n
t
?
.
c
l
i
c
k
(
)
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
u
p
l
o
a
d
i
n
g
P
i
c
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
w
-
2
0
 
h
-
2
0
 
b
g
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
/
6
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
 
o
p
a
c
i
t
y
-
0
 
g
r
o
u
p
-
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
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
o
p
a
c
i
t
y
 
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


 
 
 
 
 
 
 
 
 
 
 
 
{
u
p
l
o
a
d
i
n
g
P
i
c
 
?
 
<
L
o
a
d
e
r
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
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
:
 
<
C
a
m
e
r
a
 
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
}


 
 
 
 
 
 
 
 
 
 
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
i
n
p
u
t
 
r
e
f
=
{
p
i
c
I
n
p
u
t
R
e
f
}
 
t
y
p
e
=
"
f
i
l
e
"
 
a
c
c
e
p
t
=
"
.
j
p
g
,
 
.
j
p
e
g
,
 
.
p
n
g
"
 
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
o
n
P
r
o
f
i
l
e
P
i
c
S
e
l
e
c
t
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
h
i
d
d
e
n
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
t
e
x
t
-
l
g
 
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
r
a
c
k
i
n
g
-
t
i
g
h
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
 
l
e
a
d
i
n
g
-
t
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
{
n
a
m
e
 
|
|
 
"
Y
o
u
r
 
n
a
m
e
"
}


 
 
 
 
 
 
 
 
<
/
h
2
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
 
f
o
n
t
-
m
o
n
o
 
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
 
t
r
u
n
c
a
t
e
 
m
t
-
0
.
5
"
>
{
e
m
a
i
l
}
<
/
p
>




 
 
 
 
 
 
 
 
{
(
d
e
s
i
g
n
a
t
i
o
n
 
|
|
 
c
o
m
p
a
n
y
)
 
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
 
m
t
-
2
 
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
d
e
s
i
g
n
a
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
s
i
g
n
a
t
i
o
n
 
&
&
 
c
o
m
p
a
n
y
 
?
 
"
 
a
t
 
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
f
o
n
t
-
m
e
d
i
u
m
"
>
{
c
o
m
p
a
n
y
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
M
e
t
a
 
r
o
w
s
 
*
/
}


 
 
 
 
 
 
 
 
{
(
c
o
l
l
e
g
e
 
|
|
 
l
o
c
a
t
i
o
n
)
 
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
m
t
-
3
 
s
p
a
c
e
-
y
-
1
.
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
l
l
e
g
e
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
r
a
d
u
a
t
i
o
n
C
a
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
 
s
h
r
i
n
k
-
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
c
o
l
l
e
g
e
}
<
/
s
p
a
n
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
l
o
c
a
t
i
o
n
 
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
i
n
 
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
 
s
h
r
i
n
k
-
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
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
l
o
c
a
t
i
o
n
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
}




 
 
 
 
 
 
 
 
{
/
*
 
S
o
c
i
a
l
 
*
/
}


 
 
 
 
 
 
 
 
{
(
l
i
n
k
e
d
i
n
U
r
l
 
|
|
 
g
i
t
h
u
b
U
r
l
 
|
|
 
p
o
r
t
f
o
l
i
o
U
r
l
)
 
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
f
l
e
x
 
g
a
p
-
1
 
m
t
-
4
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
l
i
n
k
e
d
i
n
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
l
i
n
k
e
d
i
n
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
e
d
i
n
 
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
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
g
i
t
h
u
b
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
g
i
t
h
u
b
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
i
t
h
u
b
 
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
a
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
o
r
t
f
o
l
i
o
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
 
h
r
e
f
=
{
p
o
r
t
f
o
l
i
o
U
r
l
}
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
G
l
o
b
e
 
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
a
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
}




 
 
 
 
 
 
 
 
{
/
*
 
S
h
a
r
e
 
P
r
o
f
i
l
e
 
U
R
L
 
*
/
}


 
 
 
 
 
 
 
 
{
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
 
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
b
e
t
w
e
e
n
 
g
a
p
-
3
 
m
t
-
4
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
a
r
e
a
b
l
e
 
p
r
o
f
i
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
m
t
-
1
 
l
e
a
d
i
n
g
-
s
n
u
g
 
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
`
$
{
w
i
n
d
o
w
.
l
o
c
a
t
i
o
n
.
o
r
i
g
i
n
}
/
s
t
u
d
e
n
t
/
p
r
o
f
i
l
e
/
p
u
b
l
i
c
/
$
{
u
s
e
r
I
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
o
n
C
o
p
y
P
r
o
f
i
l
e
U
r
l
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
 
p
x
-
2
.
5
 
p
y
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
[
1
1
p
x
]
 
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
w
h
i
t
e
/
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
U
r
l
C
o
p
i
e
d
 
?
 
<
C
h
e
c
k
 
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
 
t
e
x
t
-
l
i
m
e
-
5
0
0
"
 
/
>
 
:
 
<
C
o
p
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
3
 
h
-
3
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
U
r
l
C
o
p
i
e
d
 
?
 
"
C
o
p
i
e
d
!
"
 
:
 
"
C
o
p
y
 
U
R
L
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
V
i
s
i
b
i
l
i
t
y
 
*
/
}


 
 
 
 
 
 
 
 
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
3
 
m
t
-
4
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
c
r
u
i
t
e
r
 
v
i
s
i
b
i
l
i
t
y


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
m
t
-
1
 
l
e
a
d
i
n
g
-
s
n
u
g
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
 
?
 
"
V
i
s
i
b
l
e
 
i
n
 
t
a
l
e
n
t
 
s
e
a
r
c
h
"
 
:
 
"
H
i
d
d
e
n
 
f
r
o
m
 
r
e
c
r
u
i
t
e
r
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
T
o
g
g
l
e
 
r
e
c
r
u
i
t
e
r
 
v
i
s
i
b
i
l
i
t
y
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
o
n
T
o
g
g
l
e
P
u
b
l
i
c
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
r
e
l
a
t
i
v
e
 
w
-
1
0
 
h
-
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
 
s
h
r
i
n
k
-
0
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
 
?
 
"
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
"
 
:
 
"
b
g
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
g
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
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
t
o
p
-
0
.
5
 
l
e
f
t
-
0
.
5
 
w
-
4
 
h
-
4
 
b
g
-
w
h
i
t
e
 
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
f
u
l
l
 
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
t
r
a
n
s
f
o
r
m
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
P
r
o
f
i
l
e
P
u
b
l
i
c
 
?
 
"
t
r
a
n
s
l
a
t
e
-
x
-
5
"
 
:
 
"
t
r
a
n
s
l
a
t
e
-
x
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


