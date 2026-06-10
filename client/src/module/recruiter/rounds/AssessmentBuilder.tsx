
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


 
 
P
l
u
s
,


 
 
T
r
a
s
h
2
,


 
 
C
h
e
v
r
o
n
U
p
,


 
 
C
h
e
v
r
o
n
D
o
w
n
,


 
 
C
i
r
c
l
e
D
o
t
,


 
 
G
r
i
p
V
e
r
t
i
c
a
l
,


 
 
H
e
l
p
C
i
r
c
l
e
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
 
t
y
p
e
 
{
 
A
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
 
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
n
t
e
r
f
a
c
e
 
A
s
s
e
s
s
m
e
n
t
B
u
i
l
d
e
r
P
r
o
p
s
 
{


 
 
q
u
e
s
t
i
o
n
s
:
 
A
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
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
q
u
e
s
t
i
o
n
s
:
 
A
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
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


}




f
u
n
c
t
i
o
n
 
c
r
e
a
t
e
E
m
p
t
y
Q
u
e
s
t
i
o
n
(
)
:
 
A
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
"
,


 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
"
,
 
"
"
]
,


 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
0
,


 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
"
,


 
 
 
 
p
o
i
n
t
s
:
 
1
,


 
 
}
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
 
A
s
s
e
s
s
m
e
n
t
B
u
i
l
d
e
r
(
{
 
q
u
e
s
t
i
o
n
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
 
}
:
 
A
s
s
e
s
s
m
e
n
t
B
u
i
l
d
e
r
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
 
[
e
x
p
a
n
d
e
d
I
n
d
e
x
,
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
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
n
u
m
b
e
r
 
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
 
a
d
d
Q
u
e
s
t
i
o
n
 
=
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
u
p
d
a
t
e
d
 
=
 
[
.
.
.
q
u
e
s
t
i
o
n
s
,
 
c
r
e
a
t
e
E
m
p
t
y
Q
u
e
s
t
i
o
n
(
)
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
(
u
p
d
a
t
e
d
)
;


 
 
 
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
u
p
d
a
t
e
d
.
l
e
n
g
t
h
 
-
 
1
)
;


 
 
}
;




 
 
c
o
n
s
t
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
,
 
u
p
d
a
t
e
s
:
 
P
a
r
t
i
a
l
<
A
s
s
e
s
s
m
e
n
t
Q
u
e
s
t
i
o
n
>
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
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
(
i
 
=
=
=
 
i
n
d
e
x
 
?
 
{
 
.
.
.
q
,
 
.
.
.
u
p
d
a
t
e
s
 
}
 
:
 
q
)
)
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
Q
u
e
s
t
i
o
n
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
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
q
u
e
s
t
i
o
n
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
_
,
 
i
)
 
=
>
 
i
 
!
=
=
 
i
n
d
e
x
)
)
;


 
 
 
 
i
f
 
(
e
x
p
a
n
d
e
d
I
n
d
e
x
 
=
=
=
 
i
n
d
e
x
)
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
n
u
l
l
)
;


 
 
 
 
e
l
s
e
 
i
f
 
(
e
x
p
a
n
d
e
d
I
n
d
e
x
 
!
=
=
 
n
u
l
l
 
&
&
 
e
x
p
a
n
d
e
d
I
n
d
e
x
 
>
 
i
n
d
e
x
)
 
{


 
 
 
 
 
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
e
x
p
a
n
d
e
d
I
n
d
e
x
 
-
 
1
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
m
o
v
e
Q
u
e
s
t
i
o
n
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
,
 
d
i
r
e
c
t
i
o
n
:
 
"
u
p
"
 
|
 
"
d
o
w
n
"
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
n
e
w
I
n
d
e
x
 
=
 
d
i
r
e
c
t
i
o
n
 
=
=
=
 
"
u
p
"
 
?
 
i
n
d
e
x
 
-
 
1
 
:
 
i
n
d
e
x
 
+
 
1
;


 
 
 
 
i
f
 
(
n
e
w
I
n
d
e
x
 
<
 
0
 
|
|
 
n
e
w
I
n
d
e
x
 
>
=
 
q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
u
p
d
a
t
e
d
 
=
 
[
.
.
.
q
u
e
s
t
i
o
n
s
]
;


 
 
 
 
[
u
p
d
a
t
e
d
[
i
n
d
e
x
]
,
 
u
p
d
a
t
e
d
[
n
e
w
I
n
d
e
x
]
]
 
=
 
[
u
p
d
a
t
e
d
[
n
e
w
I
n
d
e
x
]
!
,
 
u
p
d
a
t
e
d
[
i
n
d
e
x
]
!
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
(
u
p
d
a
t
e
d
)
;


 
 
 
 
s
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
n
e
w
I
n
d
e
x
)
;


 
 
}
;




 
 
c
o
n
s
t
 
a
d
d
O
p
t
i
o
n
 
=
 
(
q
I
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
q
 
=
 
q
u
e
s
t
i
o
n
s
[
q
I
n
d
e
x
]
!
;


 
 
 
 
i
f
 
(
q
.
o
p
t
i
o
n
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
 
6
)
 
r
e
t
u
r
n
;


 
 
 
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
q
I
n
d
e
x
,
 
{
 
o
p
t
i
o
n
s
:
 
[
.
.
.
q
.
o
p
t
i
o
n
s
,
 
"
"
]
 
}
)
;


 
 
}
;




 
 
c
o
n
s
t
 
u
p
d
a
t
e
O
p
t
i
o
n
 
=
 
(
q
I
n
d
e
x
:
 
n
u
m
b
e
r
,
 
o
p
t
I
n
d
e
x
:
 
n
u
m
b
e
r
,
 
v
a
l
u
e
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


 
 
 
 
c
o
n
s
t
 
q
 
=
 
q
u
e
s
t
i
o
n
s
[
q
I
n
d
e
x
]
!
;


 
 
 
 
c
o
n
s
t
 
o
p
t
i
o
n
s
 
=
 
[
.
.
.
q
.
o
p
t
i
o
n
s
]
;


 
 
 
 
o
p
t
i
o
n
s
[
o
p
t
I
n
d
e
x
]
 
=
 
v
a
l
u
e
;


 
 
 
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
q
I
n
d
e
x
,
 
{
 
o
p
t
i
o
n
s
 
}
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
O
p
t
i
o
n
 
=
 
(
q
I
n
d
e
x
:
 
n
u
m
b
e
r
,
 
o
p
t
I
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
q
 
=
 
q
u
e
s
t
i
o
n
s
[
q
I
n
d
e
x
]
!
;


 
 
 
 
i
f
 
(
q
.
o
p
t
i
o
n
s
.
l
e
n
g
t
h
 
<
=
 
2
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
o
p
t
i
o
n
s
 
=
 
q
.
o
p
t
i
o
n
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
_
,
 
i
)
 
=
>
 
i
 
!
=
=
 
o
p
t
I
n
d
e
x
)
;


 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
I
n
d
e
x
 
=


 
 
 
 
 
 
q
.
c
o
r
r
e
c
t
I
n
d
e
x
 
=
=
=
 
o
p
t
I
n
d
e
x


 
 
 
 
 
 
 
 
?
 
0


 
 
 
 
 
 
 
 
:
 
q
.
c
o
r
r
e
c
t
I
n
d
e
x
 
>
 
o
p
t
I
n
d
e
x


 
 
 
 
 
 
 
 
 
 
?
 
q
.
c
o
r
r
e
c
t
I
n
d
e
x
 
-
 
1


 
 
 
 
 
 
 
 
 
 
:
 
q
.
c
o
r
r
e
c
t
I
n
d
e
x
;


 
 
 
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
q
I
n
d
e
x
,
 
{
 
o
p
t
i
o
n
s
,
 
c
o
r
r
e
c
t
I
n
d
e
x
 
}
)
;


 
 
}
;




 
 
i
f
 
(
q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
{


 
 
 
 
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
y
-
8
 
t
e
x
t
-
c
e
n
t
e
r
 
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
g
r
a
y
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
"
>


 
 
 
 
 
 
 
 
 
 
<
H
e
l
p
C
i
r
c
l
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
8
 
h
-
8
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
m
x
-
a
u
t
o
 
m
b
-
2
"
 
/
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
s
m
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
q
u
e
s
t
i
o
n
s
 
a
d
d
e
d
 
y
e
t
.
 
C
l
i
c
k
 
&
l
d
q
u
o
;
A
d
d
 
Q
u
e
s
t
i
o
n
&
r
d
q
u
o
;
 
t
o
 
g
e
t
 
s
t
a
r
t
e
d
.


 
 
 
 
 
 
 
 
 
 
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
a
d
d
Q
u
e
s
t
i
o
n
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
-
2
 
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
g
r
a
y
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
g
r
a
y
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
b
o
r
d
e
r
-
b
l
a
c
k
 
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
b
l
a
c
k
 
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
w
h
i
t
e
 
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
 
Q
u
e
s
t
i
o
n


 
 
 
 
 
 
 
 
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
;


 
 
}




 
 
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
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
q
,
 
i
n
d
e
x
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
i
n
d
e
x
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
g
r
a
y
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
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
/
*
 
H
e
a
d
e
r
 
r
o
w
 
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
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
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
 
h
o
v
e
r
:
b
g
-
g
r
a
y
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
g
r
a
y
-
7
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
e
t
E
x
p
a
n
d
e
d
I
n
d
e
x
(
e
x
p
a
n
d
e
d
I
n
d
e
x
 
=
=
=
 
i
n
d
e
x
 
?
 
n
u
l
l
 
:
 
i
n
d
e
x
)


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
0
.
5
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
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
v
e
Q
u
e
s
t
i
o
n
(
i
n
d
e
x
,
 
"
u
p
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
i
n
d
e
x
 
=
=
=
 
0
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
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
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
g
r
a
y
-
6
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
g
r
a
y
-
3
0
0
 
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
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
U
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
4
 
h
-
4
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
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
v
e
Q
u
e
s
t
i
o
n
(
i
n
d
e
x
,
 
"
d
o
w
n
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
i
n
d
e
x
 
=
=
=
 
q
u
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
-
 
1
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
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
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
g
r
a
y
-
6
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
g
r
a
y
-
3
0
0
 
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
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
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
4
 
h
-
4
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
G
r
i
p
V
e
r
t
i
c
a
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
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
-
5
0
0
"
 
/
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
 
t
e
x
t
-
s
m
 
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
g
r
a
y
-
2
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
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
{
i
n
d
e
x
 
+
 
1
}
.
 
{
q
.
q
u
e
s
t
i
o
n
 
|
|
 
"
U
n
t
i
t
l
e
d
 
Q
u
e
s
t
i
o
n
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
g
r
a
y
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
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
o
p
t
i
o
n
s
.
l
e
n
g
t
h
}
 
o
p
t
i
o
n
s
 
&
m
i
d
d
o
t
;
 
{
q
.
p
o
i
n
t
s
}
 
p
t
{
q
.
p
o
i
n
t
s
 
!
=
=
 
1
 
?
 
"
s
"
 
:
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
o
p
t
i
o
n
s
[
q
.
c
o
r
r
e
c
t
I
n
d
e
x
]
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
&
m
i
d
d
o
t
;
 
A
n
s
w
e
r
:
{
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
g
r
e
e
n
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
g
r
e
e
n
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
o
p
t
i
o
n
s
[
q
.
c
o
r
r
e
c
t
I
n
d
e
x
]
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
n
u
l
l
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
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
m
o
v
e
Q
u
e
s
t
i
o
n
(
i
n
d
e
x
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
p
-
1
 
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
6
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
4
 
h
-
4
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




 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
x
p
a
n
d
e
d
 
e
d
i
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
e
x
p
a
n
d
e
d
I
n
d
e
x
 
=
=
=
 
i
n
d
e
x
 
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
-
4
 
s
p
a
c
e
-
y
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
g
r
a
y
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
g
r
a
y
-
7
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
g
r
a
y
-
9
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
Q
u
e
s
t
i
o
n
 
t
e
x
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
b
l
o
c
k
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
e
s
t
i
o
n
 
T
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
q
.
q
u
e
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
i
n
d
e
x
,
 
{
 
q
u
e
s
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
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
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
E
n
t
e
r
 
t
h
e
 
q
u
e
s
t
i
o
n
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
O
p
t
i
o
n
s
 
w
i
t
h
 
r
a
d
i
o
 
f
o
r
 
c
o
r
r
e
c
t
 
a
n
s
w
e
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
s
p
a
c
e
-
y
-
2
"
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
"
b
l
o
c
k
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
O
p
t
i
o
n
s
 
(
s
e
l
e
c
t
 
t
h
e
 
c
o
r
r
e
c
t
 
a
n
s
w
e
r
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
o
p
t
i
o
n
s
.
m
a
p
(
(
o
p
t
,
 
o
p
t
I
d
x
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
o
p
t
I
d
x
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
i
n
d
e
x
,
 
{
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
o
p
t
I
d
x
 
}
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
f
l
e
x
-
s
h
r
i
n
k
-
0
 
p
-
0
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
.
c
o
r
r
e
c
t
I
n
d
e
x
 
=
=
=
 
o
p
t
I
d
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
g
r
e
e
n
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
g
r
e
e
n
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
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
g
r
a
y
-
6
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
g
r
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
.
c
o
r
r
e
c
t
I
n
d
e
x
 
=
=
=
 
o
p
t
I
d
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
C
o
r
r
e
c
t
 
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
M
a
r
k
 
a
s
 
c
o
r
r
e
c
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
l
e
D
o
t
 
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
o
p
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
O
p
t
i
o
n
(
i
n
d
e
x
,
 
o
p
t
I
d
x
,
 
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
f
l
e
x
-
1
 
p
x
-
3
 
p
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
s
m
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
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
w
h
i
t
e
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
.
c
o
r
r
e
c
t
I
n
d
e
x
 
=
=
=
 
o
p
t
I
d
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
g
r
e
e
n
-
4
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
g
r
e
e
n
-
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
g
r
a
y
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
g
r
a
y
-
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
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
{
`
O
p
t
i
o
n
 
$
{
o
p
t
I
d
x
 
+
 
1
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
O
p
t
i
o
n
(
i
n
d
e
x
,
 
o
p
t
I
d
x
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
q
.
o
p
t
i
o
n
s
.
l
e
n
g
t
h
 
<
=
 
2
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
p
-
1
 
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
6
0
0
 
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
3
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
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
 
h
-
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
o
p
t
i
o
n
s
.
l
e
n
g
t
h
 
<
 
6
 
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
(
)
 
=
>
 
a
d
d
O
p
t
i
o
n
(
i
n
d
e
x
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
g
r
a
y
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
b
l
a
c
k
 
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
w
h
i
t
e
 
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
d
d
 
O
p
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
o
i
n
t
s
 
a
n
d
 
E
x
p
l
a
n
a
t
i
o
n
 
r
o
w
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
4
 
g
a
p
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
"
b
l
o
c
k
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
i
n
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
q
.
p
o
i
n
t
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
i
n
d
e
x
,
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
s
:
 
M
a
t
h
.
m
a
x
(
1
,
 
N
u
m
b
e
r
(
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
)
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
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
w
h
i
t
e
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
s
m
:
c
o
l
-
s
p
a
n
-
3
"
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
"
b
l
o
c
k
 
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
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
x
p
l
a
n
a
t
i
o
n
 
(
o
p
t
i
o
n
a
l
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
q
.
e
x
p
l
a
n
a
t
i
o
n
 
|
|
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
u
p
d
a
t
e
Q
u
e
s
t
i
o
n
(
i
n
d
e
x
,
 
{
 
e
x
p
l
a
n
a
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
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
g
r
a
y
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
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
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
E
x
p
l
a
i
n
 
w
h
y
 
t
h
e
 
c
o
r
r
e
c
t
 
a
n
s
w
e
r
 
i
s
 
c
o
r
r
e
c
t
.
.
.
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
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
a
d
d
Q
u
e
s
t
i
o
n
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
-
2
 
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
g
r
a
y
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
g
r
a
y
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
b
o
r
d
e
r
-
b
l
a
c
k
 
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
b
l
a
c
k
 
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
w
h
i
t
e
 
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
 
Q
u
e
s
t
i
o
n


 
 
 
 
 
 
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
;


}


