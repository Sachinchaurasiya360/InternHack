
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
,
 
u
s
e
E
f
f
e
c
t
,
 
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


 
 
U
s
e
r
,


 
 
M
a
i
l
,


 
 
P
h
o
n
e
,


 
 
B
u
i
l
d
i
n
g
2
,


 
 
B
r
i
e
f
c
a
s
e
,


 
 
S
a
v
e
,


 
 
L
o
a
d
e
r
2
,


 
 
C
a
m
e
r
a
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
l
o
b
e
,


 
 
A
l
i
g
n
L
e
f
t
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
p
l
o
a
d
D
i
r
e
c
t
T
o
S
3
 
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
u
t
i
l
s
/
u
p
l
o
a
d
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
 
t
o
a
s
t
 
f
r
o
m
 
"
@
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
t
o
a
s
t
"
;


i
m
p
o
r
t
 
I
m
a
g
e
C
r
o
p
M
o
d
a
l
 
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
I
m
a
g
e
C
r
o
p
M
o
d
a
l
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
n
t
e
r
f
a
c
e
 
R
e
c
r
u
i
t
e
r
P
r
o
f
i
l
e
 
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


 
 
c
o
n
t
a
c
t
N
o
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


 
 
b
i
o
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


}




c
o
n
s
t
 
M
A
X
_
I
M
A
G
E
_
S
I
Z
E
 
=
 
2
 
*
 
1
0
2
4
 
*
 
1
0
2
4
;
 
/
/
 
2
 
M
B




f
u
n
c
t
i
o
n
 
i
n
i
t
i
a
l
s
(
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
t
s
 
=
 
n
a
m
e
.
t
r
i
m
(
)
.
s
p
l
i
t
(
/
\
s
+
/
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;


 
 
i
f
 
(
!
p
a
r
t
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
 
"
?
"
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
(
p
a
r
t
s
[
0
]
?
.
[
0
]
 
?
?
 
"
"
)
 
+
 
(
p
a
r
t
s
[
1
]
?
.
[
0
]
 
?
?
 
"
"
)


 
 
)
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
 
R
e
c
r
u
i
t
e
r
P
r
o
f
i
l
e
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
 
u
s
e
r
,
 
s
e
t
U
s
e
r
 
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
 
[
f
o
r
m
,
 
s
e
t
F
o
r
m
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
R
e
c
r
u
i
t
e
r
P
r
o
f
i
l
e
>
(
{


 
 
 
 
n
a
m
e
:
 
"
"
,


 
 
 
 
e
m
a
i
l
:
 
"
"
,


 
 
 
 
c
o
n
t
a
c
t
N
o
:
 
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
 
"
"
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
:
 
"
"
,


 
 
 
 
b
i
o
:
 
"
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
 
"
"
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
:
 
"
"
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
:
 
"
"
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
:
 
"
"
,


 
 
}
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
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
(
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
s
a
v
i
n
g
,
 
s
e
t
S
a
v
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
 
[
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
 
s
e
t
U
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
 
[
f
i
e
l
d
E
r
r
o
r
s
,
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
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
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
[
]
>
>
(
{
}
)
;


 
 
c
o
n
s
t
 
[
c
r
o
p
S
r
c
,
 
s
e
t
C
r
o
p
S
r
c
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




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
a
p
i


 
 
 
 
 
 
.
g
e
t
(
"
/
a
u
t
h
/
m
e
"
)


 
 
 
 
 
 
.
t
h
e
n
(
(
r
e
s
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
 
=
 
r
e
s
.
d
a
t
a
.
u
s
e
r
;


 
 
 
 
 
 
 
 
s
e
t
F
o
r
m
(
{


 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
u
.
n
a
m
e
 
?
?
 
"
"
,


 
 
 
 
 
 
 
 
 
 
e
m
a
i
l
:
 
u
.
e
m
a
i
l
 
?
?
 
"
"
,


 
 
 
 
 
 
 
 
 
 
c
o
n
t
a
c
t
N
o
:
 
u
.
c
o
n
t
a
c
t
N
o
 
?
?
 
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
 
u
.
c
o
m
p
a
n
y
 
?
?
 
"
"
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
:
 
u
.
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
 
?
?
 
"
"
,


 
 
 
 
 
 
 
 
 
 
b
i
o
:
 
u
.
b
i
o
 
?
?
 
"
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
 
u
.
l
o
c
a
t
i
o
n
 
?
?
 
"
"
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
:
 
u
.
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
 
?
?
 
"
"
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
:
 
u
.
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
 
?
?
 
"
"
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
:
 
u
.
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
?
 
"
"
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}
)


 
 
 
 
 
 
.
c
a
t
c
h
(
(
)
 
=
>
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
l
o
a
d
 
p
r
o
f
i
l
e
"
)
)


 
 
 
 
 
 
.
f
i
n
a
l
l
y
(
(
)
 
=
>
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
)
;


 
 
}
,
 
[
]
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
C
h
a
n
g
e
 
=
 
(
f
i
e
l
d
:
 
k
e
y
o
f
 
R
e
c
r
u
i
t
e
r
P
r
o
f
i
l
e
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


 
 
 
 
s
e
t
F
o
r
m
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
[
f
i
e
l
d
]
:
 
v
a
l
u
e
 
}
)
)
;


 
 
 
 
i
f
 
(
f
i
e
l
d
E
r
r
o
r
s
[
f
i
e
l
d
]
)


 
 
 
 
 
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
(
(
p
r
e
v
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
x
t
 
=
 
{
 
.
.
.
p
r
e
v
 
}
;


 
 
 
 
 
 
 
 
d
e
l
e
t
e
 
n
e
x
t
[
f
i
e
l
d
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
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
 
h
a
n
d
l
e
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
 
=
 
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
 
{


 
 
 
 
c
o
n
s
t
 
f
i
l
e
 
=
 
e
.
t
a
r
g
e
t
.
f
i
l
e
s
?
.
[
0
]
;


 
 
 
 
i
f
 
(
!
f
i
l
e
)
 
r
e
t
u
r
n
;


 
 
 
 


 
 
 
 
/
/
 
1
.
 
S
i
z
e
 
R
e
s
t
r
i
c
t
i
o
n


 
 
 
 
i
f
 
(
f
i
l
e
.
s
i
z
e
 
>
 
M
A
X
_
I
M
A
G
E
_
S
I
Z
E
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
I
m
a
g
e
 
m
u
s
t
 
b
e
 
u
n
d
e
r
 
2
 
M
B
"
)
;


 
 
 
 
 
 
i
f
 
(
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
)
 
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
.
v
a
l
u
e
 
=
 
"
"
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
/
/
 
2
.
 
F
o
r
m
a
t
 
R
e
s
t
r
i
c
t
i
o
n
 
(
N
o
 
w
e
b
p
 
a
l
l
o
w
e
d
)


 
 
 
 
c
o
n
s
t
 
a
l
l
o
w
e
d
T
y
p
e
s
 
=
 
[
"
i
m
a
g
e
/
j
p
e
g
"
,
 
"
i
m
a
g
e
/
j
p
g
"
,
 
"
i
m
a
g
e
/
p
n
g
"
]
;


 
 
 
 
i
f
 
(
!
a
l
l
o
w
e
d
T
y
p
e
s
.
i
n
c
l
u
d
e
s
(
f
i
l
e
.
t
y
p
e
)
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
O
n
l
y
 
J
P
G
 
a
n
d
 
P
N
G
 
f
o
r
m
a
t
s
 
a
r
e
 
a
l
l
o
w
e
d
"
)
;


 
 
 
 
 
 
i
f
 
(
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
)
 
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
.
v
a
l
u
e
 
=
 
"
"
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
c
o
n
s
t
 
r
e
a
d
e
r
 
=
 
n
e
w
 
F
i
l
e
R
e
a
d
e
r
(
)
;


 
 
 
 
r
e
a
d
e
r
.
o
n
l
o
a
d
 
=
 
(
)
 
=
>
 
s
e
t
C
r
o
p
S
r
c
(
r
e
a
d
e
r
.
r
e
s
u
l
t
 
a
s
 
s
t
r
i
n
g
)
;


 
 
 
 
r
e
a
d
e
r
.
r
e
a
d
A
s
D
a
t
a
U
R
L
(
f
i
l
e
)
;


 
 
 
 
i
f
 
(
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
)
 
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
.
v
a
l
u
e
 
=
 
"
"
;


 
 
}
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
C
r
o
p
C
o
m
p
l
e
t
e
 
=
 
a
s
y
n
c
 
(
b
l
o
b
:
 
B
l
o
b
)
 
=
>
 
{


 
 
 
 
s
e
t
C
r
o
p
S
r
c
(
n
u
l
l
)
;


 
 
 
 
s
e
t
U
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
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
e
 
=
 
n
e
w
 
F
i
l
e
(
[
b
l
o
b
]
,
 
"
c
r
o
p
p
e
d
.
j
p
g
"
,
 
{
 
t
y
p
e
:
 
b
l
o
b
.
t
y
p
e
 
|
|
 
"
i
m
a
g
e
/
j
p
e
g
"
 
}
)
;


 
 
 
 
 
 
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
 
u
p
l
o
a
d
D
i
r
e
c
t
T
o
S
3
(
{


 
 
 
 
 
 
 
 
f
i
l
e
,


 
 
 
 
 
 
 
 
f
o
l
d
e
r
:
 
"
p
r
o
f
i
l
e
-
p
i
c
s
"
,


 
 
 
 
 
 
 
 
e
n
d
p
o
i
n
t
:
 
"
/
p
r
o
f
i
l
e
-
p
i
c
"
,


 
 
 
 
 
 
}
)
;




 
 
 
 
 
 
c
o
n
s
t
 
u
 
=
 
r
e
s
.
u
s
e
r
 
|
|
 
r
e
s
;


 
 
 
 
 
 
l
e
t
 
i
m
a
g
e
P
a
t
h
 
=
 
u
.
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
 
|
|
 
u
.
f
i
l
e
U
r
l
 
|
|
 
u
.
u
r
l
 
|
|
 
"
"
;


 
 
 
 
 
 
i
f
 
(
i
m
a
g
e
P
a
t
h
 
&
&
 
!
i
m
a
g
e
P
a
t
h
.
s
t
a
r
t
s
W
i
t
h
(
"
h
t
t
p
"
)
)
 
{


 
 
 
 
 
 
 
 
i
m
a
g
e
P
a
t
h
 
=
 
`
$
{
a
p
i
.
d
e
f
a
u
l
t
s
.
b
a
s
e
U
R
L
?
.
r
e
p
l
a
c
e
(
"
/
a
p
i
"
,
 
"
"
)
 
|
|
 
"
h
t
t
p
:
/
/
l
o
c
a
l
h
o
s
t
:
3
0
0
0
"
}
/
$
{
i
m
a
g
e
P
a
t
h
.
r
e
p
l
a
c
e
(
/
^
\
/
/
,
 
"
"
)
}
`
;


 
 
 
 
 
 
}




 
 
 
 
 
 
s
e
t
F
o
r
m
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
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
:
 
i
m
a
g
e
P
a
t
h
 
}
)
)
;


 
 
 
 
 
 
s
e
t
U
s
e
r
(
{
 
.
.
.
u
s
e
r
!
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
:
 
i
m
a
g
e
P
a
t
h
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
P
r
o
f
i
l
e
 
p
i
c
t
u
r
e
 
u
p
d
a
t
e
d
!
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
o
r
)
 
{


 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
U
p
l
o
a
d
 
r
e
n
d
e
r
i
n
g
 
e
r
r
o
r
:
"
,
 
e
r
r
o
r
)
;


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
u
p
l
o
a
d
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
"
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
U
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
(
f
a
l
s
e
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
 
h
a
n
d
l
e
S
a
v
e
 
=
 
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


 
 
 
 
i
f
 
(
!
f
o
r
m
.
n
a
m
e
.
t
r
i
m
(
)
 
|
|
 
f
o
r
m
.
n
a
m
e
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
<
 
2
)
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
N
a
m
e
 
m
u
s
t
 
b
e
 
a
t
 
l
e
a
s
t
 
2
 
c
h
a
r
a
c
t
e
r
s
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


 
 
 
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
(
{
}
)
;


 
 
 
 
s
e
t
S
a
v
i
n
g
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
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
p
u
t
(
"
/
a
u
t
h
/
m
e
"
,
 
{


 
 
 
 
 
 
 
 
n
a
m
e
:
 
f
o
r
m
.
n
a
m
e
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
c
o
n
t
a
c
t
N
o
:
 
f
o
r
m
.
c
o
n
t
a
c
t
N
o
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
c
o
m
p
a
n
y
:
 
f
o
r
m
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
r
i
m
(
)
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
:
 
f
o
r
m
.
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
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
b
i
o
:
 
f
o
r
m
.
b
i
o
.
t
r
i
m
(
)
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
 
f
o
r
m
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
t
r
i
m
(
)
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
:
 
f
o
r
m
.
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
.
t
r
i
m
(
)
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
:
 
f
o
r
m
.
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
.
t
r
i
m
(
)
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
u
 
=
 
r
e
s
.
d
a
t
a
.
u
s
e
r
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
:
 
R
e
c
r
u
i
t
e
r
P
r
o
f
i
l
e
 
=
 
{


 
 
 
 
 
 
 
 
.
.
.
f
o
r
m
,


 
 
 
 
 
 
 
 
n
a
m
e
:
 
u
.
n
a
m
e
,


 
 
 
 
 
 
 
 
c
o
n
t
a
c
t
N
o
:
 
u
.
c
o
n
t
a
c
t
N
o
 
?
?
 
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
 
u
.
c
o
m
p
a
n
y
 
?
?
 
"
"
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
:
 
u
.
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
 
?
?
 
"
"
,


 
 
 
 
 
 
 
 
b
i
o
:
 
u
.
b
i
o
 
?
?
 
"
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
 
u
.
l
o
c
a
t
i
o
n
 
?
?
 
"
"
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
:
 
u
.
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
 
?
?
 
"
"
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
:
 
u
.
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
 
?
?
 
"
"
,


 
 
 
 
 
 
}
;


 
 
 
 
 
 
s
e
t
F
o
r
m
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
U
s
e
r
(
{


 
 
 
 
 
 
 
 
.
.
.
u
s
e
r
!
,


 
 
 
 
 
 
 
 
n
a
m
e
:
 
u
p
d
a
t
e
d
.
n
a
m
e
,


 
 
 
 
 
 
 
 
c
o
n
t
a
c
t
N
o
:
 
u
p
d
a
t
e
d
.
c
o
n
t
a
c
t
N
o
,


 
 
 
 
 
 
 
 
c
o
m
p
a
n
y
:
 
u
p
d
a
t
e
d
.
c
o
m
p
a
n
y
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
:
 
u
p
d
a
t
e
d
.
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


 
 
 
 
 
 
 
 
b
i
o
:
 
u
p
d
a
t
e
d
.
b
i
o
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
 
u
p
d
a
t
e
d
.
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
:
 
u
p
d
a
t
e
d
.
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
 
u
p
d
a
t
e
d
.
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


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
P
r
o
f
i
l
e
 
u
p
d
a
t
e
d
!
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
r
r
D
a
t
a
 
=
 
(


 
 
 
 
 
 
 
 
e
r
r
 
a
s
 
{


 
 
 
 
 
 
 
 
 
 
r
e
s
p
o
n
s
e
?
:
 
{


 
 
 
 
 
 
 
 
 
 
 
 
d
a
t
a
?
:
 
{
 
e
r
r
o
r
s
?
:
 
{
 
f
i
e
l
d
E
r
r
o
r
s
?
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
[
]
>
 
}
 
}
;


 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
)
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
;


 
 
 
 
 
 
i
f
 
(
e
r
r
D
a
t
a
?
.
e
r
r
o
r
s
?
.
f
i
e
l
d
E
r
r
o
r
s
)
 
{


 
 
 
 
 
 
 
 
s
e
t
F
i
e
l
d
E
r
r
o
r
s
(
e
r
r
D
a
t
a
.
e
r
r
o
r
s
.
f
i
e
l
d
E
r
r
o
r
s
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
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
 
f
i
x
 
t
h
e
 
h
i
g
h
l
i
g
h
t
e
d
 
f
i
e
l
d
s
"
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
s
a
v
e
 
p
r
o
f
i
l
e
"
)
;


 
 
 
 
 
 
}


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
S
a
v
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
i
f
 
(
l
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




 
 
c
o
n
s
t
 
c
o
m
p
l
e
t
e
n
e
s
s
 
=
 
(
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
 
f
i
e
l
d
s
 
=
 
[


 
 
 
 
 
 
f
o
r
m
.
n
a
m
e
,


 
 
 
 
 
 
f
o
r
m
.
c
o
n
t
a
c
t
N
o
,


 
 
 
 
 
 
f
o
r
m
.
c
o
m
p
a
n
y
,


 
 
 
 
 
 
f
o
r
m
.
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


 
 
 
 
 
 
f
o
r
m
.
b
i
o
,


 
 
 
 
 
 
f
o
r
m
.
l
o
c
a
t
i
o
n
,


 
 
 
 
 
 
f
o
r
m
.
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


 
 
 
 
 
 
f
o
r
m
.
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


 
 
 
 
 
 
f
o
r
m
.
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


 
 
 
 
]
;


 
 
 
 
c
o
n
s
t
 
f
i
l
l
e
d
 
=
 
f
i
e
l
d
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
v
)
 
=
>
 
v
 
&
&
 
v
.
t
r
i
m
(
)
.
l
e
n
g
t
h
 
>
 
0
)
.
l
e
n
g
t
h
;


 
 
 
 
r
e
t
u
r
n
 
M
a
t
h
.
r
o
u
n
d
(
(
f
i
l
l
e
d
 
/
 
f
i
e
l
d
s
.
l
e
n
g
t
h
)
 
*
 
1
0
0
)
;


 
 
}
)
(
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
 
s
p
a
c
e
-
y
-
8
"
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
"
R
e
c
r
u
i
t
e
r
 
P
r
o
f
i
l
e
"
 
n
o
I
n
d
e
x
 
/
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
h
e
a
d
e
r


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
2
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
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
 
i
t
e
m
s
-
e
n
d
 
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
6
 
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
 
w
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
c
o
u
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
2
 
t
e
x
t
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
E
d
i
t
 
p
r
o
f
i
l
e


 
 
 
 
 
 
 
 
 
 
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
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
H
o
w
 
c
a
n
d
i
d
a
t
e
s
 
a
n
d
 
t
e
a
m
m
a
t
e
s
 
w
i
l
l
 
s
e
e
 
y
o
u
 
a
c
r
o
s
s
 
I
n
t
e
r
n
H
a
c
k
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
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
s
c
a
l
e
:
 
1
.
0
2
 
}
}


 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
8
 
}
}


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
S
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
s
a
v
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
2
 
p
x
-
4
 
p
y
-
2
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
s
e
m
i
b
o
l
d
 
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
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
s
a
v
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
S
a
v
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
s
a
v
i
n
g
 
?
 
"
S
a
v
i
n
g
…
"
 
:
 
"
S
a
v
e
 
c
h
a
n
g
e
s
"
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
b
u
t
t
o
n
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
h
e
a
d
e
r
>




 
 
 
 
 
 
{
/
*
 
I
d
e
n
t
i
t
y
 
c
a
r
d
 
+
 
c
o
m
p
l
e
t
e
n
e
s
s
 
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
s
e
c
t
i
o
n


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
2
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
0
5
 
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
x
l
 
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
5
 
s
m
:
p
-
6
 
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
5
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
l
i
m
e
-
4
0
0
/
1
5
 
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
4
0
0
/
3
0
 
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
l
i
m
e
-
4
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
f
o
r
m
.
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
f
o
r
m
.
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
f
o
r
m
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
s
(
f
o
r
m
.
n
a
m
e
 
|
|
 
f
o
r
m
.
e
m
a
i
l
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
 
b
o
r
d
e
r
-
0
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
C
h
a
n
g
e
 
p
r
o
f
i
l
e
 
p
i
c
t
u
r
e
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
h
a
n
d
l
e
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
f
o
r
m
.
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
f
o
r
m
.
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
f
o
r
m
.
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
 
f
o
r
m
.
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
m
t
-
0
.
5
 
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
3
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
.
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
f
o
r
m
.
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
 
f
o
r
m
.
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
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
 
s
m
:
w
-
5
6
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
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
p
r
o
f
i
l
e
 
c
o
m
p
l
e
t
e
n
e
s
s
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
a
b
u
l
a
r
-
n
u
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
m
p
l
e
t
e
n
e
s
s
}
%


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
5
 
w
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
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
c
o
m
p
l
e
t
e
n
e
s
s
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
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
h
-
f
u
l
l
 
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


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
s
e
c
t
i
o
n
>




 
 
 
 
 
 
{
/
*
 
B
a
s
i
c
 
I
n
f
o
 
*
/
}


 
 
 
 
 
 
<
S
e
c
t
i
o
n


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
B
a
s
i
c
 
i
n
f
o
r
m
a
t
i
o
n
"


 
 
 
 
 
 
 
 
e
y
e
b
r
o
w
=
"
0
1
 
/
 
i
d
e
n
t
i
t
y
"


 
 
 
 
 
 
 
 
i
c
o
n
=
{
U
s
e
r
}


 
 
 
 
 
 
 
 
d
e
l
a
y
=
{
0
.
1
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
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
F
u
l
l
 
n
a
m
e
"


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
U
s
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
n
a
m
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
v
)
 
=
>
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
n
a
m
e
"
,
 
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
n
a
m
e
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
Y
o
u
r
 
f
u
l
l
 
n
a
m
e
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
E
m
a
i
l
"


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
M
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
e
m
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d


 
 
 
 
 
 
 
 
 
 
 
 
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
m
a
i
l
 
a
d
d
r
e
s
s
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
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
P
h
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
P
h
o
n
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
o
n
t
a
c
t
N
o
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
v
)
 
=
>
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
c
o
n
t
a
c
t
N
o
"
,
 
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
c
o
n
t
a
c
t
N
o
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
+
9
1
 
9
8
7
6
5
4
3
2
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
L
o
c
a
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
M
a
p
P
i
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
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
v
)
 
=
>
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
l
o
c
a
t
i
o
n
"
,
 
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
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
 
B
a
n
g
a
l
o
r
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
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
C
o
m
p
a
n
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
B
u
i
l
d
i
n
g
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
o
m
p
a
n
y
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
v
)
 
=
>
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
c
o
m
p
a
n
y
"
,
 
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
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
Y
o
u
r
 
c
o
m
p
a
n
y
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
D
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
B
r
i
e
f
c
a
s
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
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
v
)
 
=
>
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
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
"
,
 
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
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
 
H
R
 
M
a
n
a
g
e
r
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
S
e
c
t
i
o
n
>




 
 
 
 
 
 
{
/
*
 
A
b
o
u
t
 
*
/
}


 
 
 
 
 
 
<
S
e
c
t
i
o
n


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
A
b
o
u
t
"


 
 
 
 
 
 
 
 
e
y
e
b
r
o
w
=
"
0
2
 
/
 
p
i
t
c
h
"


 
 
 
 
 
 
 
 
i
c
o
n
=
{
A
l
i
g
n
L
e
f
t
}


 
 
 
 
 
 
 
 
d
e
l
a
y
=
{
0
.
1
5
}


 
 
 
 
 
 
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
f
o
r
m
.
b
i
o
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
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
b
i
o
"
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
4
0
0
 
m
i
n
-
h
-
3
2
 
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
T
e
l
l
 
c
a
n
d
i
d
a
t
e
s
 
a
 
b
i
t
 
a
b
o
u
t
 
y
o
u
r
s
e
l
f
 
a
n
d
 
y
o
u
r
 
c
o
m
p
a
n
y
…
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
5
0
0
}


 
 
 
 
 
 
 
 
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
m
o
n
o
 
t
a
b
u
l
a
r
-
n
u
m
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
 
t
e
x
t
-
r
i
g
h
t
"
>


 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
.
b
i
o
.
l
e
n
g
t
h
}
/
5
0
0


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
S
e
c
t
i
o
n
>




 
 
 
 
 
 
{
/
*
 
L
i
n
k
s
 
*
/
}


 
 
 
 
 
 
<
S
e
c
t
i
o
n
 
t
i
t
l
e
=
"
L
i
n
k
s
"
 
e
y
e
b
r
o
w
=
"
0
3
 
/
 
p
r
e
s
e
n
c
e
"
 
i
c
o
n
=
{
G
l
o
b
e
}
 
d
e
l
a
y
=
{
0
.
2
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
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
L
i
n
k
e
d
I
n
"


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
L
i
n
k
e
d
i
n
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
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
v
)
 
=
>
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
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
"
,
 
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
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
h
t
t
p
s
:
/
/
l
i
n
k
e
d
i
n
.
c
o
m
/
i
n
/
y
o
u
r
p
r
o
f
i
l
e
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
W
e
b
s
i
t
e
 
/
 
p
o
r
t
f
o
l
i
o
"


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
G
l
o
b
e
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
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
v
)
 
=
>
 
h
a
n
d
l
e
C
h
a
n
g
e
(
"
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
"
,
 
v
)
}


 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r
=
{
f
i
e
l
d
E
r
r
o
r
s
.
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
h
t
t
p
s
:
/
/
y
o
u
r
c
o
m
p
a
n
y
.
c
o
m
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
S
e
c
t
i
o
n
>




 
 
 
 
 
 
{
/
*
 
I
m
a
g
e
 
C
r
o
p
 
M
o
d
a
l
 
*
/
}


 
 
 
 
 
 
{
c
r
o
p
S
r
c
 
&
&
 
(


 
 
 
 
 
 
 
 
<
I
m
a
g
e
C
r
o
p
M
o
d
a
l


 
 
 
 
 
 
 
 
 
 
i
m
a
g
e
S
r
c
=
{
c
r
o
p
S
r
c
}


 
 
 
 
 
 
 
 
 
 
a
s
p
e
c
t
=
{
1
}


 
 
 
 
 
 
 
 
 
 
o
n
C
r
o
p
=
{
h
a
n
d
l
e
C
r
o
p
C
o
m
p
l
e
t
e
}


 
 
 
 
 
 
 
 
 
 
o
n
C
l
o
s
e
=
{
(
)
 
=
>
 
s
e
t
C
r
o
p
S
r
c
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
/
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




f
u
n
c
t
i
o
n
 
S
e
c
t
i
o
n
(
{


 
 
t
i
t
l
e
,


 
 
e
y
e
b
r
o
w
,


 
 
i
c
o
n
:
 
I
c
o
n
,


 
 
d
e
l
a
y
 
=
 
0
,


 
 
c
h
i
l
d
r
e
n
,


}
:
 
{


 
 
t
i
t
l
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
y
e
b
r
o
w
:
 
s
t
r
i
n
g
;


 
 
i
c
o
n
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
T
y
p
e
<
{
 
c
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
 
}
>
;


 
 
d
e
l
a
y
?
:
 
n
u
m
b
e
r
;


 
 
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
;


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
m
o
t
i
o
n
.
s
e
c
t
i
o
n


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
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
2
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
 
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
x
l
 
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
 
p
x
-
5
 
s
m
:
p
x
-
6
 
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
-
b
 
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
.
5
"
>


 
 
 
 
 
 
 
 
 
 
<
I
c
o
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
<
/
d
i
v
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
e
y
e
b
r
o
w
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
5
 
s
m
:
p
-
6
"
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


 
 
 
 
<
/
m
o
t
i
o
n
.
s
e
c
t
i
o
n
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
 
F
i
e
l
d
(
{


 
 
l
a
b
e
l
,


 
 
i
c
o
n
:
 
I
c
o
n
,


 
 
v
a
l
u
e
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


 
 
d
i
s
a
b
l
e
d
,


 
 
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
,


 
 
e
r
r
o
r
,


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


 
 
i
c
o
n
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
T
y
p
e
<
{
 
c
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
 
}
>
;


 
 
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
;


 
 
o
n
C
h
a
n
g
e
?
:
 
(
v
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
 
v
o
i
d
;


 
 
d
i
s
a
b
l
e
d
?
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
?
:
 
s
t
r
i
n
g
;


 
 
e
r
r
o
r
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
b
-
1
.
5
"
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
l
a
b
e
l
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


 
 
 
 
 
 
 
 
<
I
c
o
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
 
l
e
f
t
-
3
 
t
o
p
-
1
/
2
 
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
1
/
2
 
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
4
0
0
"
 
/
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
v
a
l
u
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
o
n
C
h
a
n
g
e
 
?
 
(
e
)
 
=
>
 
o
n
C
h
a
n
g
e
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
 
:
 
u
n
d
e
f
i
n
e
d
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
d
i
s
a
b
l
e
d
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
w
-
f
u
l
l
 
p
l
-
1
0
 
p
r
-
3
 
p
y
-
2
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
m
d
 
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
6
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
e
r
r
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
r
e
d
-
5
0
0
 
f
o
c
u
s
:
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
5
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
o
c
u
s
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
e
r
r
o
r
 
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
[
1
1
p
x
]
 
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
"
>
{
e
r
r
o
r
.
j
o
i
n
(
"
,
 
"
)
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


 
 
)
;


}
