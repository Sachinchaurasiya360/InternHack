
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
P
a
r
a
m
s
,
 
L
i
n
k
,
 
u
s
e
N
a
v
i
g
a
t
e
,
 
u
s
e
L
o
c
a
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
r
e
a
c
t
-
r
o
u
t
e
r
"
;


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
 
m
o
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
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
A
r
r
o
w
L
e
f
t
,
 
M
a
p
P
i
n
,
 
I
n
d
i
a
n
R
u
p
e
e
,
 
C
a
l
e
n
d
a
r
D
a
y
s
,
 
E
x
t
e
r
n
a
l
L
i
n
k
,
 
C
h
e
c
k
,
 
L
o
a
d
e
r
2
,
 
A
r
r
o
w
U
p
R
i
g
h
t
 
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
 
u
s
e
Q
u
e
r
y
,
 
u
s
e
M
u
t
a
t
i
o
n
,
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
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
c
o
m
p
o
n
e
n
t
s
/
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
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
c
o
m
p
o
n
e
n
t
s
/
S
E
O
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
n
o
n
i
c
a
l
U
r
l
,
 
S
I
T
E
_
U
R
L
 
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
s
e
o
.
u
t
i
l
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
 
j
o
b
P
o
s
t
i
n
g
S
c
h
e
m
a
,
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
 
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
s
t
r
u
c
t
u
r
e
d
-
d
a
t
a
"
;


i
m
p
o
r
t
 
a
p
i
 
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
a
x
i
o
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
 
u
s
e
A
u
t
h
S
t
o
r
e
 
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
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
L
o
a
d
i
n
g
S
c
r
e
e
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
c
o
m
p
o
n
e
n
t
s
/
L
o
a
d
i
n
g
S
c
r
e
e
n
"
;


i
m
p
o
r
t
 
{
 
q
u
e
r
y
K
e
y
s
 
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
q
u
e
r
y
-
k
e
y
s
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
 
E
x
t
e
r
n
a
l
J
o
b
 
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
m
p
o
r
t
 
{
 
B
u
t
t
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
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;




c
o
n
s
t
 
f
a
d
e
U
p
 
=
 
{
 
h
i
d
d
e
n
:
 
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
6
 
}
,
 
s
h
o
w
:
 
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
 
}
;




f
u
n
c
t
i
o
n
 
K
i
c
k
e
r
(
{
 
c
h
i
l
d
r
e
n
 
}
:
 
{
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
 
}
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


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
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




f
u
n
c
t
i
o
n
 
C
o
m
p
a
n
y
M
a
r
k
(
{
 
l
a
b
e
l
,
 
s
i
z
e
 
=
 
"
m
d
"
 
}
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
s
i
z
e
?
:
 
"
m
d
"
 
|
 
"
l
g
"
 
}
)
 
{


 
 
c
o
n
s
t
 
d
i
m
s
 
=
 
s
i
z
e
 
=
=
=
 
"
l
g
"
 
?
 
"
w
-
1
4
 
h
-
1
4
 
t
e
x
t
-
x
l
"
 
:
 
"
w
-
1
0
 
h
-
1
0
 
t
e
x
t
-
s
m
"
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
`
$
{
d
i
m
s
}
 
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
b
o
l
d
`
}
>


 
 
 
 
 
 
{
l
a
b
e
l
?
.
c
h
a
r
A
t
(
0
)
?
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
|
|
 
"
?
"
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




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
E
x
t
e
r
n
a
l
J
o
b
D
e
t
a
i
l
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
s
l
u
g
 
}
 
=
 
u
s
e
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
{
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
l
o
c
a
t
i
o
n
 
=
 
u
s
e
L
o
c
a
t
i
o
n
(
)
;




 
 
c
o
n
s
t
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
(
)
;


 
 
c
o
n
s
t
 
[
a
p
p
l
i
e
d
,
 
s
e
t
A
p
p
l
i
e
d
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
(
f
a
l
s
e
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
j
o
b
,
 
i
s
L
o
a
d
i
n
g
,
 
e
r
r
o
r
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
e
x
t
e
r
n
a
l
J
o
b
s
.
d
e
t
a
i
l
(
s
l
u
g
!
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
a
s
y
n
c
 
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
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
`
/
e
x
t
e
r
n
a
l
-
j
o
b
s
/
$
{
s
l
u
g
}
`
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
.
j
o
b
 
a
s
 
E
x
t
e
r
n
a
l
J
o
b
;


 
 
 
 
}
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
s
l
u
g
,


 
 
 
 
r
e
t
r
y
:
 
f
a
l
s
e
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
1
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
s
i
m
i
l
a
r
J
o
b
s
 
=
 
[
]
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
e
x
t
e
r
n
a
l
J
o
b
s
.
s
i
m
i
l
a
r
(
j
o
b
?
.
i
d
 
a
s
 
n
u
m
b
e
r
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
a
s
y
n
c
 
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
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
`
/
e
x
t
e
r
n
a
l
-
j
o
b
s
`
,
 
{
 
p
a
r
a
m
s
:
 
{
 
l
i
m
i
t
:
 
2
0
 
}
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
a
l
l
 
=
 
(
r
e
s
.
d
a
t
a
.
j
o
b
s
 
|
|
 
[
]
)
 
a
s
 
E
x
t
e
r
n
a
l
J
o
b
[
]
;


 
 
 
 
 
 
c
o
n
s
t
 
c
u
r
r
e
n
t
T
a
g
s
 
=
 
n
e
w
 
S
e
t
(
(
j
o
b
!
.
t
a
g
s
 
|
|
 
[
]
)
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
a
l
l


 
 
 
 
 
 
 
 
.
f
i
l
t
e
r
(
(
j
)
 
=
>
 
j
.
i
d
 
!
=
=
 
j
o
b
!
.
i
d
)


 
 
 
 
 
 
 
 
.
m
a
p
(
(
j
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
h
a
r
e
d
 
=
 
(
j
.
t
a
g
s
 
|
|
 
[
]
)
.
f
i
l
t
e
r
(
(
t
)
 
=
>
 
c
u
r
r
e
n
t
T
a
g
s
.
h
a
s
(
t
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
)
.
l
e
n
g
t
h
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
a
m
e
C
o
m
p
a
n
y
 
=
 
j
.
c
o
m
p
a
n
y
 
&
&
 
j
o
b
!
.
c
o
m
p
a
n
y
 
&
&
 
j
.
c
o
m
p
a
n
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
=
=
=
 
j
o
b
!
.
c
o
m
p
a
n
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
?
 
1
 
:
 
0
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
j
o
b
:
 
j
,
 
s
c
o
r
e
:
 
s
h
a
r
e
d
 
*
 
2
 
+
 
s
a
m
e
C
o
m
p
a
n
y
 
}
;


 
 
 
 
 
 
 
 
}
)


 
 
 
 
 
 
 
 
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
b
.
s
c
o
r
e
 
-
 
a
.
s
c
o
r
e
)


 
 
 
 
 
 
 
 
.
s
l
i
c
e
(
0
,
 
4
)


 
 
 
 
 
 
 
 
.
m
a
p
(
(
x
)
 
=
>
 
x
.
j
o
b
)
;


 
 
 
 
}
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
j
o
b
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
1
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
e
x
t
e
r
n
a
l
J
o
b
s
.
s
t
a
t
u
s
(
j
o
b
?
.
i
d
 
a
s
 
n
u
m
b
e
r
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
a
s
y
n
c
 
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
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
`
/
s
t
u
d
e
n
t
/
e
x
t
e
r
n
a
l
-
j
o
b
s
/
$
{
j
o
b
!
.
i
d
}
/
s
t
a
t
u
s
`
)
;


 
 
 
 
 
 
i
f
 
(
r
e
s
.
d
a
t
a
.
a
p
p
l
i
e
d
)
 
s
e
t
A
p
p
l
i
e
d
(
t
r
u
e
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
;


 
 
 
 
}
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
j
o
b
 
&
&
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
2
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
a
p
p
l
y
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
F
n
:
 
a
s
y
n
c
 
(
j
o
b
I
d
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


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
`
/
s
t
u
d
e
n
t
/
e
x
t
e
r
n
a
l
-
j
o
b
s
/
$
{
j
o
b
I
d
}
/
a
p
p
l
y
`
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
A
p
p
l
i
e
d
(
t
r
u
e
)
;


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
(
{
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
a
p
p
l
i
c
a
t
i
o
n
s
.
m
i
n
e
(
)
 
}
)
;


 
 
 
 
}
,


 
 
}
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
A
p
p
l
y
 
=
 
(
j
o
b
D
a
t
a
:
 
E
x
t
e
r
n
a
l
J
o
b
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
a
p
p
l
i
e
d
)
 
{


 
 
 
 
 
 
a
p
p
l
y
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
j
o
b
D
a
t
a
.
i
d
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
j
o
b
D
a
t
a
.
a
p
p
l
y
L
i
n
k
)
 
{


 
 
 
 
 
 
w
i
n
d
o
w
.
o
p
e
n
(
j
o
b
D
a
t
a
.
a
p
p
l
y
L
i
n
k
,
 
"
_
b
l
a
n
k
"
,
 
"
n
o
o
p
e
n
e
r
,
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
)
;


 
 
 
 
}


 
 
}
;




 
 
i
f
 
(
i
s
L
o
a
d
i
n
g
)
 
r
e
t
u
r
n
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
/
>
;




 
 
i
f
 
(
e
r
r
o
r
 
|
|
 
!
j
o
b
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
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
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
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
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
 
p
x
-
4
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
e
r
r
o
r
 
/
 
4
0
4
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
4
 
t
e
x
t
-
3
x
l
 
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
"
>
J
o
b
 
n
o
t
 
f
o
u
n
d
.
<
/
h
1
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
m
t
-
3
 
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
5
0
0
 
m
b
-
6
"
>
T
h
i
s
 
p
o
s
t
i
n
g
 
m
a
y
 
h
a
v
e
 
e
x
p
i
r
e
d
 
o
r
 
b
e
e
n
 
r
e
m
o
v
e
d
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
j
o
b
s
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
l
i
m
e
-
5
0
0
 
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
r
o
w
s
e
 
a
l
l
 
j
o
b
s
 
<
A
r
r
o
w
U
p
R
i
g
h
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
L
i
n
k
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
>


 
 
 
 
)
;


 
 
}




 
 
c
o
n
s
t
 
n
o
w
 
=
 
D
a
t
e
.
n
o
w
(
)
;
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
p
u
r
i
t
y


 
 
c
o
n
s
t
 
d
a
y
s
L
e
f
t
 
=
 
j
o
b
.
e
x
p
i
r
e
s
A
t


 
 
 
 
?
 
M
a
t
h
.
c
e
i
l
(
(
n
e
w
 
D
a
t
e
(
j
o
b
.
e
x
p
i
r
e
s
A
t
)
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
 
-
 
n
o
w
)
 
/
 
(
1
0
0
0
 
*
 
6
0
 
*
 
6
0
 
*
 
2
4
)
)


 
 
 
 
:
 
n
u
l
l
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
$
{
j
o
b
.
r
o
l
e
 
|
|
 
"
J
o
b
"
}
 
a
t
 
$
{
j
o
b
.
c
o
m
p
a
n
y
 
|
|
 
"
C
o
m
p
a
n
y
"
}
`
}


 
 
 
 
 
 
 
 
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
=
{
j
o
b
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
?
.
s
l
i
c
e
(
0
,
 
1
6
0
)
 
|
|
 
"
"
}


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
`
/
j
o
b
s
/
$
{
j
o
b
.
s
l
u
g
 
|
|
 
j
o
b
.
i
d
}
`
)
}


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
[


 
 
 
 
 
 
 
 
 
 
j
o
b
P
o
s
t
i
n
g
S
c
h
e
m
a
(
{


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
j
o
b
.
r
o
l
e
 
|
|
 
"
J
o
b
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
 
j
o
b
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
 
|
|
 
"
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
a
n
y
:
 
j
o
b
.
c
o
m
p
a
n
y
 
|
|
 
"
C
o
m
p
a
n
y
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
o
c
a
t
i
o
n
:
 
j
o
b
.
l
o
c
a
t
i
o
n
 
|
|
 
"
R
e
m
o
t
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
a
l
a
r
y
:
 
j
o
b
.
s
a
l
a
r
y
 
|
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
,


 
 
 
 
 
 
 
 
 
 
 
 
d
e
a
d
l
i
n
e
:
 
j
o
b
.
e
x
p
i
r
e
s
A
t
 
|
|
 
n
u
l
l
,


 
 
 
 
 
 
 
 
 
 
 
 
c
r
e
a
t
e
d
A
t
:
 
j
o
b
.
c
r
e
a
t
e
d
A
t
,


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
j
o
b
.
i
d
,


 
 
 
 
 
 
 
 
 
 
}
)
,


 
 
 
 
 
 
 
 
 
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
(
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
H
o
m
e
"
,
 
u
r
l
:
 
S
I
T
E
_
U
R
L
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
J
o
b
s
"
,
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
j
o
b
s
`
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
j
o
b
.
r
o
l
e
 
|
|
 
"
J
o
b
"
,
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
j
o
b
s
/
$
{
j
o
b
.
s
l
u
g
 
|
|
 
j
o
b
.
i
d
}
`
 
}
,


 
 
 
 
 
 
 
 
 
 
]
)
,


 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
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
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
p
t
-
2
4
 
p
b
-
1
6
 
p
x
-
6
"
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
s
h
o
w
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
7
 
}
 
}
 
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
m
a
x
-
w
-
4
x
l
 
m
x
-
a
u
t
o
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
U
p
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
j
o
b
s
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
 
m
b
-
8
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
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
 
B
a
c
k
 
t
o
 
j
o
b
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
U
p
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
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
e
x
t
e
r
n
a
l
 
/
 
p
o
s
t
i
n
g
<
/
K
i
c
k
e
r
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
t
-
4
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
m
p
a
n
y
M
a
r
k
 
l
a
b
e
l
=
{
j
o
b
.
c
o
m
p
a
n
y
 
|
|
 
"
?
"
}
 
s
i
z
e
=
"
l
g
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
h
1
 
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
3
x
l
 
s
m
:
t
e
x
t
-
4
x
l
 
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
j
o
b
.
r
o
l
e
 
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
 
R
o
l
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
c
o
m
p
a
n
y
 
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
m
t
-
2
 
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
5
0
0
"
>
{
j
o
b
.
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
p
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
m
t
-
5
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
x
-
5
 
g
a
p
-
y
-
2
 
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
j
o
b
.
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
 
{
j
o
b
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
s
a
l
a
r
y
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
d
i
a
n
R
u
p
e
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
 
{
j
o
b
.
s
a
l
a
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
y
s
L
e
f
t
 
!
=
=
 
n
u
l
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
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
D
a
y
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
.
5
 
h
-
3
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
y
s
L
e
f
t
 
>
 
0
 
?
 
`
$
{
d
a
y
s
L
e
f
t
}
 
d
a
y
s
 
l
e
f
t
`
 
:
 
"
E
x
p
i
r
e
s
 
s
o
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
o
d
y
 
c
a
r
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
U
p
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
 
p
-
8
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
a
g
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
a
g
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
b
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
t
a
g
s
<
/
K
i
c
k
e
r
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
t
-
3
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
a
g
s
.
m
a
p
(
(
t
a
g
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
a
g
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
t
a
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/
*
 
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
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
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
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
<
/
K
i
c
k
e
r
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
t
-
3
 
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
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
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
/
*
 
A
p
p
l
y
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
a
p
p
l
y
L
i
n
k
 
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
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
l
g
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
 
h
a
n
d
l
e
A
p
p
l
y
(
j
o
b
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
a
p
p
l
y
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
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
o
u
n
d
e
d
-
m
d
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
p
p
l
i
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
5
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
9
0
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
8
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
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
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
5
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
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
p
p
l
y
M
u
t
a
t
i
o
n
.
i
s
P
e
n
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>
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
 
A
p
p
l
y
i
n
g
.
.
.
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
a
p
p
l
i
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>
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
4
 
h
-
4
"
 
/
>
 
A
p
p
l
i
e
d
,
 
v
i
e
w
 
p
o
s
t
i
n
g
 
<
E
x
t
e
r
n
a
l
L
i
n
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>
<
E
x
t
e
r
n
a
l
L
i
n
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
4
 
h
-
4
"
 
/
>
 
A
p
p
l
y
 
n
o
w
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
l
g
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
 
n
a
v
i
g
a
t
e
(
`
/
l
o
g
i
n
?
f
r
o
m
=
$
{
e
n
c
o
d
e
U
R
I
C
o
m
p
o
n
e
n
t
(
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
)
}
`
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
l
i
m
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
g
-
l
i
m
e
-
5
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
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
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
4
 
h
-
4
"
 
/
>
 
L
o
g
i
n
 
t
o
 
a
p
p
l
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
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
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
i
m
i
l
a
r
 
j
o
b
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
s
i
m
i
l
a
r
J
o
b
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
m
o
t
i
o
n
.
d
i
v
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
U
p
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
m
t
-
1
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
r
e
l
a
t
e
d
 
/
 
s
i
m
i
l
a
r
 
r
o
l
e
s
<
/
K
i
c
k
e
r
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
m
t
-
3
 
t
e
x
t
-
x
l
 
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
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
i
m
i
l
a
r
 
j
o
b
s
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
g
r
i
d
 
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
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
i
m
i
l
a
r
J
o
b
s
.
m
a
p
(
(
s
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
j
o
b
s
/
e
x
t
/
$
{
s
.
s
l
u
g
}
`
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
g
r
o
u
p
 
b
l
o
c
k
 
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
 
p
-
5
 
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
 
n
o
-
u
n
d
e
r
l
i
n
e
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
b
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
C
o
m
p
a
n
y
M
a
r
k
 
l
a
b
e
l
=
{
s
.
c
o
m
p
a
n
y
 
|
|
 
"
?
"
}
 
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
h
3
 
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
s
.
r
o
l
e
 
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
 
R
o
l
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
c
o
m
p
a
n
y
 
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
0
.
5
 
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
s
.
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
p
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
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
4
 
h
-
4
 
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
4
0
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
.
5
 
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
-
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
y
-
0
.
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
a
l
l
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
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
x
-
4
 
g
a
p
-
y
-
1
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
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
 
h
-
3
"
 
/
>
 
{
s
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
s
a
l
a
r
y
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
I
n
d
i
a
n
R
u
p
e
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
 
h
-
3
"
 
/
>
 
{
s
.
s
a
l
a
r
y
}
<
/
s
p
a
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
>


 
 
)
;


}


