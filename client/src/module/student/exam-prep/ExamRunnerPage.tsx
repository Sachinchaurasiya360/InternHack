
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
M
e
m
o
,
 
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
N
a
v
i
g
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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
 
C
l
o
c
k
,
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
X
C
i
r
c
l
e
,
 
T
r
o
p
h
y
,
 
R
o
t
a
t
e
C
c
w
,
 
C
h
e
v
r
o
n
L
e
f
t
,
 
C
h
e
v
r
o
n
R
i
g
h
t
,
 
F
l
a
g
 
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


 
 
g
e
t
E
x
a
m
,


 
 
g
e
t
Q
u
e
s
t
i
o
n
s
F
o
r
E
x
a
m
,


 
 
g
e
t
Q
u
e
s
t
i
o
n
s
F
o
r
S
e
c
t
i
o
n
,


 
 
t
y
p
e
 
E
x
a
m
Q
u
e
s
t
i
o
n
,


}
 
f
r
o
m
 
"
.
/
d
a
t
a
/
e
x
a
m
s
"
;




t
y
p
e
 
M
o
d
e
 
=
 
"
m
o
c
k
"
 
|
 
"
s
e
c
t
i
o
n
"
;




f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
T
i
m
e
(
s
:
 
n
u
m
b
e
r
)
 
{


 
 
c
o
n
s
t
 
m
 
=
 
M
a
t
h
.
f
l
o
o
r
(
s
 
/
 
6
0
)
;


 
 
c
o
n
s
t
 
s
e
c
 
=
 
s
 
%
 
6
0
;


 
 
r
e
t
u
r
n
 
`
$
{
m
}
:
$
{
s
e
c
.
t
o
S
t
r
i
n
g
(
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}
`
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
 
E
x
a
m
M
o
c
k
P
a
g
e
(
)
 
{


 
 
r
e
t
u
r
n
 
<
E
x
a
m
R
u
n
n
e
r
P
a
g
e
 
m
o
d
e
=
"
m
o
c
k
"
 
/
>
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
 
E
x
a
m
S
e
c
t
i
o
n
P
a
g
e
(
)
 
{


 
 
r
e
t
u
r
n
 
<
E
x
a
m
R
u
n
n
e
r
P
a
g
e
 
m
o
d
e
=
"
s
e
c
t
i
o
n
"
 
/
>
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
a
m
R
u
n
n
e
r
P
a
g
e
(
{
 
m
o
d
e
 
}
:
 
{
 
m
o
d
e
:
 
M
o
d
e
 
}
)
 
{


 
 
c
o
n
s
t
 
{
 
e
x
a
m
I
d
,
 
s
e
c
t
i
o
n
I
d
 
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
 
e
x
a
m
 
=
 
g
e
t
E
x
a
m
(
e
x
a
m
I
d
 
?
?
 
"
"
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
s
t
i
o
n
s
 
=
 
u
s
e
M
e
m
o
<
E
x
a
m
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
>
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
e
x
a
m
)
 
r
e
t
u
r
n
 
[
]
;


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
s
e
c
t
i
o
n
"
 
&
&
 
s
e
c
t
i
o
n
I
d
)
 
r
e
t
u
r
n
 
g
e
t
Q
u
e
s
t
i
o
n
s
F
o
r
S
e
c
t
i
o
n
(
e
x
a
m
.
i
d
,
 
s
e
c
t
i
o
n
I
d
)
;


 
 
 
 
r
e
t
u
r
n
 
g
e
t
Q
u
e
s
t
i
o
n
s
F
o
r
E
x
a
m
(
e
x
a
m
.
i
d
)
;


 
 
}
,
 
[
e
x
a
m
,
 
m
o
d
e
,
 
s
e
c
t
i
o
n
I
d
]
)
;




 
 
c
o
n
s
t
 
d
u
r
a
t
i
o
n
S
e
c
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
e
x
a
m
)
 
r
e
t
u
r
n
 
0
;


 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
m
o
c
k
"
)
 
r
e
t
u
r
n
 
e
x
a
m
.
t
o
t
a
l
D
u
r
a
t
i
o
n
 
*
 
6
0
;


 
 
 
 
c
o
n
s
t
 
s
e
c
 
=
 
e
x
a
m
.
s
e
c
t
i
o
n
s
.
f
i
n
d
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
e
c
t
i
o
n
I
d
)
;


 
 
 
 
r
e
t
u
r
n
 
(
s
e
c
?
.
d
u
r
a
t
i
o
n
M
i
n
 
?
?
 
2
0
)
 
*
 
6
0
;


 
 
}
,
 
[
e
x
a
m
,
 
m
o
d
e
,
 
s
e
c
t
i
o
n
I
d
]
)
;




 
 
c
o
n
s
t
 
[
i
d
x
,
 
s
e
t
I
d
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
(
0
)
;


 
 
c
o
n
s
t
 
[
a
n
s
w
e
r
s
,
 
s
e
t
A
n
s
w
e
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
 
n
u
m
b
e
r
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
f
l
a
g
g
e
d
,
 
s
e
t
F
l
a
g
g
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
<
S
e
t
<
s
t
r
i
n
g
>
>
(
n
e
w
 
S
e
t
(
)
)
;


 
 
c
o
n
s
t
 
[
s
u
b
m
i
t
t
e
d
,
 
s
e
t
S
u
b
m
i
t
t
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
 
[
r
e
m
a
i
n
i
n
g
,
 
s
e
t
R
e
m
a
i
n
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
d
u
r
a
t
i
o
n
S
e
c
)
;


 
 
c
o
n
s
t
 
[
p
a
u
s
e
d
,
 
s
e
t
P
a
u
s
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


 
 
 
 
(
)
 
=
>
 
(
t
y
p
e
o
f
 
d
o
c
u
m
e
n
t
 
!
=
=
 
"
u
n
d
e
f
i
n
e
d
"
 
?
 
d
o
c
u
m
e
n
t
.
h
i
d
d
e
n
 
:
 
f
a
l
s
e
)
,


 
 
)
;


 
 
c
o
n
s
t
 
[
t
a
b
S
w
i
t
c
h
e
s
,
 
s
e
t
T
a
b
S
w
i
t
c
h
e
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
(
0
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
C
h
a
n
g
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
d
o
c
u
m
e
n
t
.
h
i
d
d
e
n
)
 
{


 
 
 
 
 
 
 
 
s
e
t
P
a
u
s
e
d
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
s
e
t
T
a
b
S
w
i
t
c
h
e
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
 
p
r
e
v
 
+
 
1
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
s
e
t
P
a
u
s
e
d
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




 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
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
c
h
a
n
g
e
"
,
 
h
a
n
d
l
e
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
C
h
a
n
g
e
)
;




 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
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
c
h
a
n
g
e
"
,
 
h
a
n
d
l
e
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
C
h
a
n
g
e
)
;


 
 
 
 
}
;


 
 
}
,
 
[
]
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
n
e
x
t
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
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
R
e
m
a
i
n
i
n
g
(
d
u
r
a
t
i
o
n
S
e
c
)
;


 
 
}
,
 
[
d
u
r
a
t
i
o
n
S
e
c
]
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


 
 
 
 
i
f
 
(
s
u
b
m
i
t
t
e
d
 
|
|
 
!
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
 
|
|
 
p
a
u
s
e
d
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
 
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
R
e
m
a
i
n
i
n
g
(
(
r
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
r
 
<
=
 
1
)
 
{


 
 
 
 
 
 
 
 
 
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
t
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
 
0
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
r
 
-
 
1
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
1
0
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
)
;


 
 
}
,
 
[
s
u
b
m
i
t
t
e
d
,
 
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
,
 
p
a
u
s
e
d
]
)
;




 
 
i
f
 
(
!
e
x
a
m
)
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
"
/
l
e
a
r
n
/
e
x
a
m
-
p
r
e
p
"
 
r
e
p
l
a
c
e
 
/
>
;


 
 
i
f
 
(
!
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
 
p
y
-
1
6
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
v
a
i
l
a
b
l
e
 
f
o
r
 
t
h
i
s
 
s
e
c
t
i
o
n
 
y
e
t
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
{
`
/
l
e
a
r
n
/
e
x
a
m
-
p
r
e
p
/
$
{
e
x
a
m
.
i
d
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
t
e
x
t
-
v
i
o
l
e
t
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
v
i
o
l
e
t
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
m
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
 
m
t
-
2
 
i
n
l
i
n
e
-
b
l
o
c
k
"
>
B
a
c
k
 
t
o
 
{
e
x
a
m
.
n
a
m
e
}
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


 
 
 
 
)
;


 
 
}




 
 
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
i
d
x
]
;


 
 
c
o
n
s
t
 
a
n
s
w
e
r
e
d
 
=
 
O
b
j
e
c
t
.
k
e
y
s
(
a
n
s
w
e
r
s
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
 
p
c
t
 
=
 
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
a
n
s
w
e
r
e
d
 
/
 
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
 
*
 
1
0
0
)
;




 
 
f
u
n
c
t
i
o
n
 
h
a
n
d
l
e
A
n
s
w
e
r
(
i
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
i
f
 
(
s
u
b
m
i
t
t
e
d
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
A
n
s
w
e
r
s
(
{
 
.
.
.
a
n
s
w
e
r
s
,
 
[
c
u
r
r
e
n
t
.
i
d
]
:
 
i
 
}
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
 
t
o
g
g
l
e
F
l
a
g
(
)
 
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
 
n
e
w
 
S
e
t
(
f
l
a
g
g
e
d
)
;


 
 
 
 
i
f
 
(
n
e
x
t
.
h
a
s
(
c
u
r
r
e
n
t
.
i
d
)
)
 
n
e
x
t
.
d
e
l
e
t
e
(
c
u
r
r
e
n
t
.
i
d
)
;


 
 
 
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
c
u
r
r
e
n
t
.
i
d
)
;


 
 
 
 
s
e
t
F
l
a
g
g
e
d
(
n
e
x
t
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
 
h
a
n
d
l
e
S
u
b
m
i
t
(
)
 
{


 
 
 
 
s
e
t
S
u
b
m
i
t
t
e
d
(
t
r
u
e
)
;


 
 
}




 
 
i
f
 
(
s
u
b
m
i
t
t
e
d
)
 
{


 
 
 
 
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
f
i
l
t
e
r
(
(
q
)
 
=
>
 
a
n
s
w
e
r
s
[
q
.
i
d
]
 
=
=
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
c
o
r
e
P
c
t
 
=
 
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
c
o
r
r
e
c
t
 
/
 
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
 
*
 
1
0
0
)
;


 
 
 
 
c
o
n
s
t
 
p
a
s
s
e
d
 
=
 
s
c
o
r
e
P
c
t
 
>
=
 
e
x
a
m
.
p
a
s
s
C
u
t
o
f
f
;




 
 
 
 
c
o
n
s
t
 
b
y
T
o
p
i
c
 
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
r
e
d
u
c
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
 
{
 
c
o
r
r
e
c
t
:
 
n
u
m
b
e
r
;
 
t
o
t
a
l
:
 
n
u
m
b
e
r
 
}
>
>
(
(
a
c
c
,
 
q
)
 
=
>
 
{


 
 
 
 
 
 
a
c
c
[
q
.
t
o
p
i
c
]
 
=
 
a
c
c
[
q
.
t
o
p
i
c
]
 
|
|
 
{
 
c
o
r
r
e
c
t
:
 
0
,
 
t
o
t
a
l
:
 
0
 
}
;


 
 
 
 
 
 
a
c
c
[
q
.
t
o
p
i
c
]
.
t
o
t
a
l
+
+
;


 
 
 
 
 
 
i
f
 
(
a
n
s
w
e
r
s
[
q
.
i
d
]
 
=
=
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
)
 
a
c
c
[
q
.
t
o
p
i
c
]
.
c
o
r
r
e
c
t
+
+
;


 
 
 
 
 
 
r
e
t
u
r
n
 
a
c
c
;


 
 
 
 
}
,
 
{
}
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
r
e
l
a
t
i
v
e
 
p
b
-
1
2
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
{
`
$
{
e
x
a
m
.
n
a
m
e
}
 
R
e
s
u
l
t
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
`
Y
o
u
r
 
$
{
e
x
a
m
.
n
a
m
e
}
 
m
o
c
k
 
t
e
s
t
 
r
e
s
u
l
t
.
`
}
 
n
o
I
n
d
e
x
 
/
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
 
s
c
a
l
e
:
 
0
.
9
5
 
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
 
s
c
a
l
e
:
 
1
 
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
`
r
o
u
n
d
e
d
-
2
x
l
 
p
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
 
m
b
-
6
 
$
{
p
a
s
s
e
d
 
?
 
"
b
g
-
e
m
e
r
a
l
d
-
6
0
0
"
 
:
 
"
b
g
-
a
m
b
e
r
-
6
0
0
"
}
`
}


 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
,
 
r
o
t
a
t
e
:
 
-
1
8
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
 
s
c
a
l
e
:
 
1
,
 
r
o
t
a
t
e
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
2
0
0
 
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
w
-
2
0
 
h
-
2
0
 
m
x
-
a
u
t
o
 
r
o
u
n
d
e
d
-
2
x
l
 
b
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
 
b
a
c
k
d
r
o
p
-
b
l
u
r
 
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
 
m
b
-
4
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
w
h
i
t
e
"
>
{
p
a
s
s
e
d
 
?
 
"
P
a
s
s
e
d
!
"
 
:
 
"
K
e
e
p
 
P
r
a
c
t
i
c
i
n
g
"
}
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
/
9
0
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
 
s
c
o
r
e
d
 
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
b
o
l
d
"
>
{
c
o
r
r
e
c
t
}
/
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
l
e
n
g
t
h
}
<
/
s
p
a
n
>
 
(
{
s
c
o
r
e
P
c
t
}
%
)


 
 
 
 
 
 
 
 
 
 
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
w
h
i
t
e
/
7
0
 
t
e
x
t
-
x
s
 
m
t
-
1
"
>
C
u
t
o
f
f
:
 
{
e
x
a
m
.
p
a
s
s
C
u
t
o
f
f
}
%
<
/
p
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
 
m
d
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
 
m
b
-
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
r
o
u
n
d
e
d
-
2
x
l
 
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
1
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
8
0
0
 
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
g
r
a
y
-
9
0
0
 
p
-
5
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
g
r
a
y
-
9
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
w
h
i
t
e
 
m
b
-
3
"
>
T
o
p
i
c
 
B
r
e
a
k
d
o
w
n
<
/
h
3
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
b
y
T
o
p
i
c
)
.
m
a
p
(
(
[
t
o
p
i
c
,
 
s
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
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
s
.
c
o
r
r
e
c
t
 
/
 
s
.
t
o
t
a
l
)
 
*
 
1
0
0
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
 
k
e
y
=
{
t
o
p
i
c
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
x
s
 
m
b
-
1
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
 
c
a
p
i
t
a
l
i
z
e
"
>
{
t
o
p
i
c
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
-
/
g
,
 
"
 
"
)
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
g
r
a
y
-
5
0
0
"
>
{
s
.
c
o
r
r
e
c
t
}
/
{
s
.
t
o
t
a
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
h
-
f
u
l
l
 
$
{
p
 
>
=
 
7
0
 
?
 
"
b
g
-
g
r
e
e
n
-
5
0
0
"
 
:
 
p
 
>
=
 
4
0
 
?
 
"
b
g
-
a
m
b
e
r
-
5
0
0
"
 
:
 
"
b
g
-
r
e
d
-
5
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
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
p
}
%
`
 
}
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
r
o
u
n
d
e
d
-
2
x
l
 
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
1
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
8
0
0
 
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
g
r
a
y
-
9
0
0
 
p
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
c
o
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
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
g
r
a
y
-
9
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
w
h
i
t
e
 
m
b
-
2
"
>
S
u
m
m
a
r
y
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
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
t
e
x
t
-
x
s
 
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
"
>
<
d
t
>
A
t
t
e
m
p
t
e
d
<
/
d
t
>
<
d
d
 
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
9
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
w
h
i
t
e
"
>
{
a
n
s
w
e
r
e
d
}
/
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
l
e
n
g
t
h
}
<
/
d
d
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
"
>
<
d
t
>
C
o
r
r
e
c
t
<
/
d
t
>
<
d
d
 
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
e
e
n
-
6
0
0
"
>
{
c
o
r
r
e
c
t
}
<
/
d
d
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
"
>
<
d
t
>
W
r
o
n
g
<
/
d
t
>
<
d
d
 
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
r
e
d
-
6
0
0
"
>
{
a
n
s
w
e
r
e
d
 
-
 
c
o
r
r
e
c
t
}
<
/
d
d
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
"
>
<
d
t
>
S
k
i
p
p
e
d
<
/
d
t
>
<
d
d
 
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
 
a
n
s
w
e
r
e
d
}
<
/
d
d
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
l
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
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
A
n
s
w
e
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
F
l
a
g
g
e
d
(
n
e
w
 
S
e
t
(
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
u
b
m
i
t
t
e
d
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
d
x
(
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
R
e
m
a
i
n
i
n
g
(
d
u
r
a
t
i
o
n
S
e
c
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
f
l
e
x
-
1
 
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
w
h
i
t
e
 
b
g
-
g
r
a
y
-
9
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
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
t
r
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
a
r
n
/
e
x
a
m
-
p
r
e
p
/
$
{
e
x
a
m
.
i
d
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
f
l
e
x
-
1
 
p
x
-
4
 
p
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
g
r
a
y
-
3
0
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
x
a
m
 
H
o
m
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
g
r
a
y
-
9
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
w
h
i
t
e
"
>
R
e
v
i
e
w
 
A
n
s
w
e
r
s
<
/
h
3
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
s
e
r
A
n
s
 
=
 
a
n
s
w
e
r
s
[
q
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
r
r
e
c
t
 
=
 
u
s
e
r
A
n
s
 
=
=
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
 
k
e
y
=
{
q
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
r
o
u
n
d
e
d
-
2
x
l
 
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
1
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
8
0
0
 
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
g
r
a
y
-
9
0
0
 
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
2
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
s
m
 
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
9
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
w
h
i
t
e
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
r
-
1
"
>
Q
{
i
 
+
 
1
}
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
A
n
s
 
=
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
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
 
p
x
-
2
 
p
y
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
S
k
i
p
p
e
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
i
s
C
o
r
r
e
c
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
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
g
r
e
e
n
-
5
0
0
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
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
4
 
h
-
4
 
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
 
s
h
r
i
n
k
-
0
"
 
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
1
 
m
t
-
3
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
i
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
i
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
t
e
x
t
-
x
s
 
p
x
-
3
 
p
y
-
2
 
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
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
i
 
=
=
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
 
b
g
-
g
r
e
e
n
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
e
e
n
-
9
5
0
/
2
0
 
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
g
r
e
e
n
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
o
i
 
=
=
=
 
u
s
e
r
A
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
g
-
r
e
d
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
r
e
d
-
9
5
0
/
2
0
 
t
e
x
t
-
r
e
d
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
r
e
d
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
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
/
d
i
v
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
t
-
3
 
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
s
e
m
i
b
o
l
d
 
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
9
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
w
h
i
t
e
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
:
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
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
;


 
 
}




 
 
c
o
n
s
t
 
t
i
m
e
W
a
r
n
 
=
 
r
e
m
a
i
n
i
n
g
 
<
 
6
0
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
r
e
l
a
t
i
v
e
 
p
b
-
1
2
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
{
`
$
{
e
x
a
m
.
n
a
m
e
}
,
 
$
{
m
o
d
e
 
=
=
=
 
"
m
o
c
k
"
 
?
 
"
M
o
c
k
 
T
e
s
t
"
 
:
 
"
P
r
a
c
t
i
c
e
"
}
`
}
 
n
o
I
n
d
e
x
 
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
s
t
i
c
k
y
 
t
o
p
-
0
 
z
-
3
0
 
-
m
x
-
4
 
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
w
h
i
t
e
/
9
5
 
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
5
0
/
9
5
 
b
a
c
k
d
r
o
p
-
b
l
u
r
 
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
8
0
0
 
m
b
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
1
p
x
]
 
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
>
{
e
x
a
m
.
n
a
m
e
}
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
g
r
a
y
-
9
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
w
h
i
t
e
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
{
i
d
x
 
+
 
1
}
 
o
f
 
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
l
e
n
g
t
h
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


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
t
i
m
e
W
a
r
n
 
?
 
{
 
s
c
a
l
e
:
 
[
1
,
 
1
.
0
5
,
 
1
]
 
}
 
:
 
{
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
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
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
{
`
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
m
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
m
e
W
a
r
n
 
?
 
"
b
g
-
r
e
d
-
1
0
0
 
t
e
x
t
-
r
e
d
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
r
e
d
-
9
0
0
/
3
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
"
 
:
 
"
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
9
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
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
o
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


 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
r
m
a
t
T
i
m
e
(
r
e
m
a
i
n
i
n
g
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
u
b
m
i
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
w
h
i
t
e
 
b
g
-
g
r
a
y
-
9
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
x
l
 
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
9
0
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
S
u
b
m
i
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
 
m
t
-
3
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
i
n
d
i
g
o
-
5
0
0
"
 
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
p
c
t
}
%
`
 
}
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
t
a
b
S
w
i
t
c
h
e
s
 
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
t
-
3
 
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
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


 
 
 
 
 
 
 
 
 
 
 
 
T
a
b
 
s
w
i
t
c
h
 
d
e
t
e
c
t
e
d
 
(
{
t
a
b
S
w
i
t
c
h
e
s
}
/
3
)
.
 
I
n
 
r
e
a
l
 
e
x
a
m
s
 
t
h
i
s
 
m
a
y
 
d
i
s
q
u
a
l
i
f
y
 
y
o
u
.


 
 
 
 
 
 
 
 
 
 
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
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


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
u
r
r
e
n
t
.
i
d
}


 
 
 
 
 
 
 
 
 
 
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
 
x
:
 
2
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
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
x
:
 
-
2
0
 
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
g
r
a
y
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
2
x
l
 
p
-
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
 
m
b
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
s
e
m
i
b
o
l
d
 
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
 
p
x
-
2
 
p
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
.
t
o
p
i
c
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
-
/
g
,
 
"
 
"
)
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
s
e
m
i
b
o
l
d
 
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
 
p
x
-
2
 
p
y
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
 
b
g
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
9
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
v
i
o
l
e
t
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
v
i
o
l
e
t
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
.
d
i
f
f
i
c
u
l
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
t
o
g
g
l
e
F
l
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
{
`
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
 
t
e
x
t
-
x
s
 
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
l
g
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
a
g
g
e
d
.
h
a
s
(
c
u
r
r
e
n
t
.
i
d
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
a
m
b
e
r
-
1
0
0
 
t
e
x
t
-
a
m
b
e
r
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
a
m
b
e
r
-
9
0
0
/
3
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
a
m
b
e
r
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
l
a
g
 
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
f
l
a
g
g
e
d
.
h
a
s
(
c
u
r
r
e
n
t
.
i
d
)
 
?
 
"
F
l
a
g
g
e
d
"
 
:
 
"
F
l
a
g
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
b
a
s
e
 
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
9
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
w
h
i
t
e
 
m
b
-
5
 
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
c
u
r
r
e
n
t
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
<
/
p
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
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
 
i
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
e
l
 
=
 
a
n
s
w
e
r
s
[
c
u
r
r
e
n
t
.
i
d
]
 
=
=
=
 
i
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
n
s
w
e
r
(
i
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
w
-
f
u
l
l
 
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
-
3
 
t
e
x
t
-
s
m
 
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
 
b
o
r
d
e
r
-
2
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
v
i
o
l
e
t
-
5
0
0
 
b
g
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
9
5
0
/
3
0
 
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
9
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
w
h
i
t
e
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
v
i
o
l
e
t
-
3
0
0
 
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
w
-
6
 
h
-
6
 
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
 
$
{
s
e
l
 
?
 
"
b
g
-
v
i
o
l
e
t
-
5
0
0
 
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
 
:
 
"
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
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
.
f
r
o
m
C
h
a
r
C
o
d
e
(
6
5
 
+
 
i
)
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
>
{
o
p
t
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
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
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


 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
 
m
t
-
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
I
d
x
(
M
a
t
h
.
m
a
x
(
0
,
 
i
d
x
 
-
 
1
)
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
i
d
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
4
 
p
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
g
r
a
y
-
3
0
0
 
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
g
r
a
y
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
x
l
 
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
4
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


 
 
 
 
 
 
 
 
 
 
P
r
e
v
i
o
u
s


 
 
 
 
 
 
 
 
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
"
>
{
a
n
s
w
e
r
e
d
}
 
a
n
s
w
e
r
e
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
i
d
x
 
<
 
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
I
d
x
(
i
d
x
 
+
 
1
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
 
p
x
-
4
 
p
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
w
h
i
t
e
 
b
g
-
g
r
a
y
-
9
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
x
l
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
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
b
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
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
u
b
m
i
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
4
 
p
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
w
h
i
t
e
 
b
g
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
e
e
n
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
x
l
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
S
u
b
m
i
t
 
T
e
s
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


