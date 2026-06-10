
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
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
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


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
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
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
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
 
P
r
a
c
t
i
c
e
T
a
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
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
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
 
=
 
"
d
y
n
a
m
i
c
-
p
r
o
g
r
a
m
m
i
n
g
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
R
e
c
u
r
s
i
o
n
N
o
d
e
 
(
m
i
n
i
m
a
l
,
 
f
o
r
 
t
o
p
-
d
o
w
n
 
t
r
e
e
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
u
r
s
i
o
n
N
o
d
e
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
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


 
 
p
a
r
e
n
t
?
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
p
t
h
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
e
:
 
"
a
c
t
i
v
e
"
 
|
 
"
d
o
n
e
"
;


 
 
r
e
t
u
r
n
V
a
l
u
e
?
:
 
n
u
m
b
e
r
 
|
 
s
t
r
i
n
g
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
 
M
i
n
i
R
e
c
u
r
s
i
o
n
T
r
e
e
(
{
 
n
o
d
e
s
,
 
a
c
t
i
v
e
I
d
,
 
h
e
i
g
h
t
 
=
 
2
4
0
 
}
:
 
{
 
n
o
d
e
s
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
;
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
;
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
i
f
 
(
n
o
d
e
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
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
c
o
n
s
t
 
W
 
=
 
5
2
0
;


 
 
c
o
n
s
t
 
n
o
d
e
R
 
=
 
1
5
;


 
 
c
o
n
s
t
 
l
e
v
e
l
H
 
=
 
5
0
;




 
 
c
o
n
s
t
 
b
y
D
e
p
t
h
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
>
 
=
 
{
}
;


 
 
f
o
r
 
(
c
o
n
s
t
 
n
 
o
f
 
n
o
d
e
s
)
 
{


 
 
 
 
i
f
 
(
!
b
y
D
e
p
t
h
[
n
.
d
e
p
t
h
]
)
 
b
y
D
e
p
t
h
[
n
.
d
e
p
t
h
]
 
=
 
[
]
;


 
 
 
 
b
y
D
e
p
t
h
[
n
.
d
e
p
t
h
]
.
p
u
s
h
(
n
)
;


 
 
}


 
 
c
o
n
s
t
 
m
a
x
D
e
p
t
h
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
n
.
d
e
p
t
h
)
)
;


 
 
c
o
n
s
t
 
p
o
s
i
t
i
o
n
s
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
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
f
o
r
 
(
l
e
t
 
d
 
=
 
0
;
 
d
 
<
=
 
m
a
x
D
e
p
t
h
;
 
d
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
g
r
o
u
p
 
=
 
b
y
D
e
p
t
h
[
d
]
 
?
?
 
[
]
;


 
 
 
 
g
r
o
u
p
.
f
o
r
E
a
c
h
(
(
n
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
 
=
 
{
 
x
:
 
(
W
 
/
 
(
g
r
o
u
p
.
l
e
n
g
t
h
 
+
 
1
)
)
 
*
 
(
i
 
+
 
1
)
,
 
y
:
 
2
2
 
+
 
d
 
*
 
l
e
v
e
l
H
 
}
;


 
 
 
 
}
)
;


 
 
}




 
 
c
o
n
s
t
 
e
d
g
e
s
:
 
{
 
x
1
:
 
n
u
m
b
e
r
;
 
y
1
:
 
n
u
m
b
e
r
;
 
x
2
:
 
n
u
m
b
e
r
;
 
y
2
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
c
o
n
s
t
 
n
 
o
f
 
n
o
d
e
s
)
 
{


 
 
 
 
i
f
 
(
n
.
p
a
r
e
n
t
 
&
&
 
p
o
s
i
t
i
o
n
s
[
n
.
p
a
r
e
n
t
]
 
&
&
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
p
a
r
e
n
t
]
;


 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
;


 
 
 
 
 
 
e
d
g
e
s
.
p
u
s
h
(
{
 
x
1
:
 
p
.
x
,
 
y
1
:
 
p
.
y
 
+
 
n
o
d
e
R
,
 
x
2
:
 
c
.
x
,
 
y
2
:
 
c
.
y
 
-
 
n
o
d
e
R
 
}
)
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
s
v
g
H
 
=
 
M
a
t
h
.
m
a
x
(
h
e
i
g
h
t
,
 
(
m
a
x
D
e
p
t
h
 
+
 
1
)
 
*
 
l
e
v
e
l
H
 
+
 
4
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
 
c
l
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
 
o
v
e
r
f
l
o
w
-
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
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
W
}
 
h
e
i
g
h
t
=
{
s
v
g
H
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
s
v
g
H
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
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
{
e
d
g
e
s
.
m
a
p
(
(
e
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
i
}
 
x
1
=
{
e
.
x
1
}
 
y
1
=
{
e
.
y
1
}
 
x
2
=
{
e
.
x
2
}
 
y
2
=
{
e
.
y
2
}
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
{
n
o
d
e
s
.
m
a
p
(
(
n
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
o
s
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
o
s
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
n
.
i
d
 
=
=
=
 
a
c
t
i
v
e
I
d
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
 
=
 
n
.
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
i
s
A
c
t
i
v
e
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
"
#
3
b
8
2
f
6
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
g
 
k
e
y
=
{
n
.
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
p
o
s
.
x
}
 
c
y
=
{
p
o
s
.
y
}
 
r
=
{
n
o
d
e
R
}
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
"
#
f
f
f
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
s
t
y
l
e
=
{
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
 
"
f
i
l
l
 
0
.
2
5
s
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
o
s
.
x
}
 
y
=
{
p
o
s
.
y
 
+
 
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
8
"
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
i
l
l
=
"
#
f
f
f
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}
 
s
t
y
l
e
=
{
{
 
p
o
i
n
t
e
r
E
v
e
n
t
s
:
 
"
n
o
n
e
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
r
e
t
u
r
n
V
a
l
u
e
 
!
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
o
s
.
x
 
+
 
n
o
d
e
R
 
+
 
3
}
 
y
=
{
p
o
s
.
y
 
-
 
n
o
d
e
R
 
+
 
6
}
 
f
o
n
t
S
i
z
e
=
"
8
"
 
f
i
l
l
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
=
{
S
t
r
i
n
g
(
n
.
r
e
t
u
r
n
V
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
D
P
 
T
a
b
l
e
 
c
o
m
p
o
n
e
n
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
D
P
T
a
b
l
e
(
{
 
d
p
,
 
j
u
s
t
,
 
d
e
p
s
,
 
m
e
m
o
H
i
t
,
 
l
a
b
e
l
s
 
}
:
 
{
 
d
p
:
 
(
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
)
[
]
;
 
j
u
s
t
?
:
 
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
;
 
d
e
p
s
?
:
 
n
u
m
b
e
r
[
]
;
 
m
e
m
o
H
i
t
?
:
 
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
;
 
l
a
b
e
l
s
:
 
s
t
r
i
n
g
[
]
 
}
)
 
{


 
 
c
o
n
s
t
 
d
e
p
S
e
t
 
=
 
n
e
w
 
S
e
t
(
d
e
p
s
 
?
?
 
[
]
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
c
e
n
t
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
x
-
a
u
t
o
 
p
b
-
2
 
p
x
-
1
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
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
{
d
p
.
m
a
p
(
(
v
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
 
i
s
J
u
s
t
 
=
 
i
 
=
=
=
 
j
u
s
t
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
D
e
p
 
=
 
d
e
p
S
e
t
.
h
a
s
(
i
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
H
i
t
 
=
 
i
 
=
=
=
 
m
e
m
o
H
i
t
;


 
 
 
 
 
 
 
 
 
 
l
e
t
 
c
l
s
 
=
 
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
1
0
0
"
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
H
i
t
)
 
c
l
s
 
=
 
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
5
0
0
/
1
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
v
i
o
l
e
t
-
2
0
0
"
;


 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
i
s
J
u
s
t
)
 
c
l
s
 
=
 
"
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
5
0
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
4
0
0
/
1
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
l
i
m
e
-
2
0
0
"
;


 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
i
s
D
e
p
)
 
c
l
s
 
=
 
"
b
o
r
d
e
r
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
5
0
0
/
1
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
a
m
b
e
r
-
2
0
0
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
 
k
e
y
=
{
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
 
p
x
-
2
 
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
 
b
o
r
d
e
r
-
2
 
m
i
n
-
w
-
1
1
 
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
c
l
s
}
`
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
l
a
b
e
l
s
[
i
]
 
?
?
 
i
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
v
 
=
=
=
 
n
u
l
l
 
?
 
"
-
"
 
:
 
v
 
=
=
=
 
-
1
 
?
 
"
∞
"
 
:
 
v
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
r
o
b
l
e
m
 
d
e
f
i
n
i
t
i
o
n
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
P
r
o
b
l
e
m
K
e
y
 
=
 
"
f
i
b
"
 
|
 
"
s
t
a
i
r
s
"
 
|
 
"
c
o
i
n
"
 
|
 
"
r
o
b
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
 
P
r
o
b
l
e
m
C
o
n
f
i
g
 
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


 
 
p
s
e
u
d
o
T
o
p
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


 
 
p
s
e
u
d
o
B
o
t
t
o
m
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


 
 
p
a
r
s
e
I
n
p
u
t
:
 
(
s
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
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
;


 
 
b
a
s
e
L
a
b
e
l
s
:
 
(
c
f
g
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
 
=
>
 
s
t
r
i
n
g
[
]
;


 
 
r
e
c
u
r
r
e
n
c
e
:
 
(
d
p
:
 
n
u
m
b
e
r
[
]
,
 
i
:
 
n
u
m
b
e
r
,
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
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
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
d
e
p
s
:
 
n
u
m
b
e
r
[
]
 
}
;


 
 
b
a
s
e
C
a
s
e
F
o
r
:
 
(
c
f
g
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
 
=
>
 
n
u
m
b
e
r
[
]
;


 
 
b
a
s
e
V
a
l
u
e
:
 
(
i
:
 
n
u
m
b
e
r
,
 
c
f
g
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
 
=
>
 
n
u
m
b
e
r
;


 
 
f
r
o
m
I
:
 
(
c
f
g
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
 
=
>
 
n
u
m
b
e
r
;


 
 
u
p
t
o
:
 
(
c
f
g
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
 
=
>
 
n
u
m
b
e
r
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
e
s
e
t
s
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
 
}
[
]
;


}




c
o
n
s
t
 
P
R
O
B
L
E
M
S
:
 
R
e
c
o
r
d
<
P
r
o
b
l
e
m
K
e
y
,
 
P
r
o
b
l
e
m
C
o
n
f
i
g
>
 
=
 
{


 
 
f
i
b
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
F
i
b
o
n
a
c
c
i
"
,


 
 
 
 
p
s
e
u
d
o
T
o
p
:
 
[
"
m
e
m
o
 
←
 
{
}
"
,
 
"
f
u
n
c
t
i
o
n
 
f
i
b
(
n
)
:
"
,
 
"
 
 
i
f
 
n
 
i
n
 
m
e
m
o
:
 
r
e
t
u
r
n
 
m
e
m
o
[
n
]
"
,
 
"
 
 
i
f
 
n
 
<
 
2
:
 
r
e
t
u
r
n
 
n
"
,
 
"
 
 
m
e
m
o
[
n
]
 
←
 
f
i
b
(
n
-
1
)
 
+
 
f
i
b
(
n
-
2
)
"
,
 
"
 
 
r
e
t
u
r
n
 
m
e
m
o
[
n
]
"
]
,


 
 
 
 
p
s
e
u
d
o
B
o
t
t
o
m
:
 
[
"
d
p
[
0
]
 
←
 
0
;
 
d
p
[
1
]
 
←
 
1
"
,
 
"
f
o
r
 
i
 
i
n
 
2
.
.
n
:
"
,
 
"
 
 
d
p
[
i
]
 
←
 
d
p
[
i
-
1
]
 
+
 
d
p
[
i
-
2
]
"
,
 
"
r
e
t
u
r
n
 
d
p
[
n
]
"
]
,


 
 
 
 
p
a
r
s
e
I
n
p
u
t
:
 
(
s
)
 
=
>
 
(
{
 
n
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
0
,
 
M
a
t
h
.
m
i
n
(
2
0
,
 
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
N
u
m
b
e
r
(
s
)
 
|
|
 
0
)
)
)
 
}
)
,


 
 
 
 
b
a
s
e
L
a
b
e
l
s
:
 
(
{
 
n
 
}
)
 
=
>
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
+
 
1
 
}
,
 
(
_
,
 
i
)
 
=
>
 
S
t
r
i
n
g
(
i
)
)
,


 
 
 
 
r
e
c
u
r
r
e
n
c
e
:
 
(
d
p
,
 
i
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
d
p
[
i
 
-
 
1
]
 
+
 
d
p
[
i
 
-
 
2
]
,
 
d
e
p
s
:
 
[
i
 
-
 
1
,
 
i
 
-
 
2
]
 
}
)
,


 
 
 
 
b
a
s
e
C
a
s
e
F
o
r
:
 
(
{
 
n
 
}
)
 
=
>
 
n
 
=
=
=
 
0
 
?
 
[
0
]
 
:
 
[
0
,
 
1
]
,


 
 
 
 
b
a
s
e
V
a
l
u
e
:
 
(
i
)
 
=
>
 
i
,


 
 
 
 
f
r
o
m
I
:
 
(
{
 
n
 
}
)
 
=
>
 
n
 
=
=
=
 
0
 
?
 
0
 
:
 
2
,


 
 
 
 
u
p
t
o
:
 
(
{
 
n
 
}
)
 
=
>
 
n
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
:
 
"
e
.
g
.
 
7
"
,


 
 
 
 
p
r
e
s
e
t
s
:
 
[
{
 
l
a
b
e
l
:
 
"
n
=
5
"
,
 
v
a
l
u
e
:
 
"
5
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
n
=
1
0
"
,
 
v
a
l
u
e
:
 
"
1
0
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
n
=
1
5
"
,
 
v
a
l
u
e
:
 
"
1
5
"
 
}
]
,


 
 
}
,


 
 
s
t
a
i
r
s
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
C
l
i
m
b
i
n
g
 
S
t
a
i
r
s
"
,


 
 
 
 
p
s
e
u
d
o
T
o
p
:
 
[
"
f
u
n
c
t
i
o
n
 
w
a
y
s
(
n
)
:
"
,
 
"
 
 
i
f
 
n
 
i
n
 
m
e
m
o
:
 
r
e
t
u
r
n
 
m
e
m
o
[
n
]
"
,
 
"
 
 
i
f
 
n
 
<
=
 
1
:
 
r
e
t
u
r
n
 
1
"
,
 
"
 
 
m
e
m
o
[
n
]
 
←
 
w
a
y
s
(
n
-
1
)
 
+
 
w
a
y
s
(
n
-
2
)
"
,
 
"
 
 
r
e
t
u
r
n
 
m
e
m
o
[
n
]
"
]
,


 
 
 
 
p
s
e
u
d
o
B
o
t
t
o
m
:
 
[
"
d
p
[
0
]
 
←
 
1
;
 
d
p
[
1
]
 
←
 
1
"
,
 
"
f
o
r
 
i
 
i
n
 
2
.
.
n
:
"
,
 
"
 
 
d
p
[
i
]
 
←
 
d
p
[
i
-
1
]
 
+
 
d
p
[
i
-
2
]
"
,
 
"
r
e
t
u
r
n
 
d
p
[
n
]
"
]
,


 
 
 
 
p
a
r
s
e
I
n
p
u
t
:
 
(
s
)
 
=
>
 
(
{
 
n
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
0
,
 
M
a
t
h
.
m
i
n
(
2
0
,
 
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
N
u
m
b
e
r
(
s
)
 
|
|
 
0
)
)
)
 
}
)
,


 
 
 
 
b
a
s
e
L
a
b
e
l
s
:
 
(
{
 
n
 
}
)
 
=
>
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
+
 
1
 
}
,
 
(
_
,
 
i
)
 
=
>
 
S
t
r
i
n
g
(
i
)
)
,


 
 
 
 
r
e
c
u
r
r
e
n
c
e
:
 
(
d
p
,
 
i
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
d
p
[
i
 
-
 
1
]
 
+
 
d
p
[
i
 
-
 
2
]
,
 
d
e
p
s
:
 
[
i
 
-
 
1
,
 
i
 
-
 
2
]
 
}
)
,


 
 
 
 
b
a
s
e
C
a
s
e
F
o
r
:
 
(
{
 
n
 
}
)
 
=
>
 
n
 
=
=
=
 
0
 
?
 
[
0
]
 
:
 
[
0
,
 
1
]
,


 
 
 
 
b
a
s
e
V
a
l
u
e
:
 
(
)
 
=
>
 
1
,


 
 
 
 
f
r
o
m
I
:
 
(
{
 
n
 
}
)
 
=
>
 
n
 
=
=
=
 
0
 
?
 
0
 
:
 
2
,


 
 
 
 
u
p
t
o
:
 
(
{
 
n
 
}
)
 
=
>
 
n
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
:
 
"
e
.
g
.
 
1
0
"
,


 
 
 
 
p
r
e
s
e
t
s
:
 
[
{
 
l
a
b
e
l
:
 
"
n
=
5
"
,
 
v
a
l
u
e
:
 
"
5
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
n
=
8
"
,
 
v
a
l
u
e
:
 
"
8
"
 
}
,
 
{
 
l
a
b
e
l
:
 
"
n
=
1
2
"
,
 
v
a
l
u
e
:
 
"
1
2
"
 
}
]
,


 
 
}
,


 
 
r
o
b
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
H
o
u
s
e
 
R
o
b
b
e
r
"
,


 
 
 
 
p
s
e
u
d
o
T
o
p
:
 
[
"
f
u
n
c
t
i
o
n
 
r
o
b
(
i
)
:
"
,
 
"
 
 
i
f
 
i
 
<
 
0
:
 
r
e
t
u
r
n
 
0
"
,
 
"
 
 
i
f
 
i
 
i
n
 
m
e
m
o
:
 
r
e
t
u
r
n
 
m
e
m
o
[
i
]
"
,
 
"
 
 
m
e
m
o
[
i
]
 
←
 
m
a
x
(
r
o
b
(
i
-
1
)
,
 
r
o
b
(
i
-
2
)
 
+
 
h
o
u
s
e
s
[
i
]
)
"
,
 
"
 
 
r
e
t
u
r
n
 
m
e
m
o
[
i
]
"
]
,


 
 
 
 
p
s
e
u
d
o
B
o
t
t
o
m
:
 
[
"
d
p
[
0
]
 
←
 
h
o
u
s
e
s
[
0
]
"
,
 
"
d
p
[
1
]
 
←
 
m
a
x
(
h
o
u
s
e
s
[
0
]
,
 
h
o
u
s
e
s
[
1
]
)
"
,
 
"
f
o
r
 
i
 
i
n
 
2
.
.
n
-
1
:
"
,
 
"
 
 
d
p
[
i
]
 
←
 
m
a
x
(
d
p
[
i
-
1
]
,
 
d
p
[
i
-
2
]
 
+
 
h
o
u
s
e
s
[
i
]
)
"
,
 
"
r
e
t
u
r
n
 
d
p
[
n
-
1
]
"
]
,


 
 
 
 
p
a
r
s
e
I
n
p
u
t
:
 
(
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
 
a
r
r
 
=
 
s
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
[
,
\
s
]
+
/
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
N
u
m
b
e
r
(
x
)
 
|
|
 
0
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
 
{
 
n
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
 
a
r
r
.
l
e
n
g
t
h
)
,
 
e
x
t
r
a
:
 
a
r
r
 
}
;


 
 
 
 
}
,


 
 
 
 
b
a
s
e
L
a
b
e
l
s
:
 
(
{
 
e
x
t
r
a
 
}
)
 
=
>
 
(
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
)
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
`
$
{
i
}
(
$
{
v
}
)
`
)
,


 
 
 
 
r
e
c
u
r
r
e
n
c
e
:
 
(
d
p
,
 
i
,
 
e
x
t
r
a
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
a
r
r
 
=
 
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
v
a
l
u
e
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
d
p
[
i
 
-
 
1
]
,
 
d
p
[
i
 
-
 
2
]
 
+
 
a
r
r
[
i
]
)
,
 
d
e
p
s
:
 
[
i
 
-
 
1
,
 
i
 
-
 
2
]
 
}
;


 
 
 
 
}
,


 
 
 
 
b
a
s
e
C
a
s
e
F
o
r
:
 
(
{
 
e
x
t
r
a
 
}
)
 
=
>
 
(
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
)
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
 
1
 
?
 
[
0
]
 
:
 
[
0
,
 
1
]
,


 
 
 
 
b
a
s
e
V
a
l
u
e
:
 
(
i
,
 
{
 
e
x
t
r
a
 
}
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
a
r
r
 
=
 
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
;


 
 
 
 
 
 
i
f
 
(
i
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
a
r
r
[
0
]
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
m
a
x
(
a
r
r
[
0
]
,
 
a
r
r
[
1
]
 
?
?
 
0
)
;


 
 
 
 
}
,


 
 
 
 
f
r
o
m
I
:
 
(
{
 
e
x
t
r
a
 
}
)
 
=
>
 
(
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
)
.
l
e
n
g
t
h
 
<
=
 
1
 
?
 
1
 
:
 
2
,


 
 
 
 
u
p
t
o
:
 
(
{
 
n
 
}
)
 
=
>
 
n
 
-
 
1
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
:
 
"
e
.
g
.
 
2
,
 
7
,
 
9
,
 
3
,
 
1
"
,


 
 
 
 
p
r
e
s
e
t
s
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
[
2
,
7
,
9
,
3
,
1
]
"
,
 
v
a
l
u
e
:
 
"
2
,
 
7
,
 
9
,
 
3
,
 
1
"
 
}
,


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
[
5
,
3
,
4
,
1
1
,
2
]
"
,
 
v
a
l
u
e
:
 
"
5
,
 
3
,
 
4
,
 
1
1
,
 
2
"
 
}
,


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
[
1
,
2
,
3
,
1
]
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
1
"
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
c
o
i
n
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
C
o
i
n
 
C
h
a
n
g
e
"
,


 
 
 
 
p
s
e
u
d
o
T
o
p
:
 
[
"
f
u
n
c
t
i
o
n
 
m
i
n
C
o
i
n
s
(
a
m
o
u
n
t
)
:
"
,
 
"
 
 
i
f
 
a
m
o
u
n
t
 
=
=
 
0
:
 
r
e
t
u
r
n
 
0
"
,
 
"
 
 
i
f
 
a
m
o
u
n
t
 
i
n
 
m
e
m
o
:
 
r
e
t
u
r
n
 
m
e
m
o
[
a
m
o
u
n
t
]
"
,
 
"
 
 
b
e
s
t
 
←
 
∞
"
,
 
"
 
 
f
o
r
 
c
 
i
n
 
c
o
i
n
s
:
"
,
 
"
 
 
 
 
i
f
 
c
 
<
=
 
a
m
o
u
n
t
:
"
,
 
"
 
 
 
 
 
 
b
e
s
t
 
←
 
m
i
n
(
b
e
s
t
,
 
m
i
n
C
o
i
n
s
(
a
m
o
u
n
t
-
c
)
+
1
)
"
,
 
"
 
 
m
e
m
o
[
a
m
o
u
n
t
]
 
←
 
b
e
s
t
"
,
 
"
 
 
r
e
t
u
r
n
 
b
e
s
t
"
]
,


 
 
 
 
p
s
e
u
d
o
B
o
t
t
o
m
:
 
[
"
d
p
[
0
]
 
←
 
0
"
,
 
"
f
o
r
 
i
 
i
n
 
1
.
.
a
m
o
u
n
t
:
"
,
 
"
 
 
d
p
[
i
]
 
←
 
∞
"
,
 
"
 
 
f
o
r
 
c
 
i
n
 
c
o
i
n
s
:
"
,
 
"
 
 
 
 
i
f
 
c
 
<
=
 
i
 
a
n
d
 
d
p
[
i
-
c
]
 
!
=
 
∞
:
"
,
 
"
 
 
 
 
 
 
d
p
[
i
]
 
←
 
m
i
n
(
d
p
[
i
]
,
 
d
p
[
i
-
c
]
 
+
 
1
)
"
,
 
"
r
e
t
u
r
n
 
d
p
[
a
m
o
u
n
t
]
"
]
,


 
 
 
 
p
a
r
s
e
I
n
p
u
t
:
 
(
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
 
[
a
m
t
S
t
r
,
 
c
o
i
n
S
t
r
]
 
=
 
s
.
s
p
l
i
t
(
"
|
"
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
 
a
m
o
u
n
t
 
=
 
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
 
M
a
t
h
.
m
i
n
(
1
5
,
 
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
N
u
m
b
e
r
(
a
m
t
S
t
r
)
 
|
|
 
0
)
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
c
o
i
n
s
 
=
 
(
c
o
i
n
S
t
r
 
?
?
 
"
1
,
2
,
5
"
)
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
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
N
u
m
b
e
r
(
x
)
 
|
|
 
0
)
)
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
x
)
 
=
>
 
x
 
>
 
0
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
n
:
 
a
m
o
u
n
t
,
 
e
x
t
r
a
:
 
c
o
i
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
 
0
 
?
 
c
o
i
n
s
 
:
 
[
1
,
 
2
,
 
5
]
 
}
;


 
 
 
 
}
,


 
 
 
 
b
a
s
e
L
a
b
e
l
s
:
 
(
{
 
n
 
}
)
 
=
>
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
+
 
1
 
}
,
 
(
_
,
 
i
)
 
=
>
 
S
t
r
i
n
g
(
i
)
)
,


 
 
 
 
r
e
c
u
r
r
e
n
c
e
:
 
(
d
p
,
 
i
,
 
e
x
t
r
a
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
c
o
i
n
s
 
=
 
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
;


 
 
 
 
 
 
l
e
t
 
b
e
s
t
 
=
 
I
n
f
i
n
i
t
y
;


 
 
 
 
 
 
c
o
n
s
t
 
d
e
p
s
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
c
 
o
f
 
c
o
i
n
s
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
c
 
<
=
 
i
 
&
&
 
d
p
[
i
 
-
 
c
]
 
!
=
=
 
I
n
f
i
n
i
t
y
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
a
n
d
 
=
 
d
p
[
i
 
-
 
c
]
 
+
 
1
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
c
a
n
d
 
<
 
b
e
s
t
)
 
b
e
s
t
 
=
 
c
a
n
d
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
 
-
 
c
 
>
=
 
0
)
 
d
e
p
s
.
p
u
s
h
(
i
 
-
 
c
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
v
a
l
u
e
:
 
b
e
s
t
,
 
d
e
p
s
 
}
;


 
 
 
 
}
,


 
 
 
 
b
a
s
e
C
a
s
e
F
o
r
:
 
(
)
 
=
>
 
[
0
]
,


 
 
 
 
b
a
s
e
V
a
l
u
e
:
 
(
)
 
=
>
 
0
,


 
 
 
 
f
r
o
m
I
:
 
(
)
 
=
>
 
1
,


 
 
 
 
u
p
t
o
:
 
(
{
 
n
 
}
)
 
=
>
 
n
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
:
 
"
e
.
g
.
 
1
1
 
|
 
1
,
 
2
,
 
5
"
,


 
 
 
 
p
r
e
s
e
t
s
:
 
[


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
1
1
 
|
 
1
,
2
,
5
"
,
 
v
a
l
u
e
:
 
"
1
1
 
|
 
1
,
 
2
,
 
5
"
 
}
,


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
7
 
|
 
1
,
3
,
4
"
,
 
v
a
l
u
e
:
 
"
7
 
|
 
1
,
 
3
,
 
4
"
 
}
,


 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
9
 
|
 
2
,
5
,
1
0
"
,
 
v
a
l
u
e
:
 
"
9
 
|
 
2
,
 
5
,
 
1
0
"
 
}
,


 
 
 
 
]
,


 
 
}
,


}
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
D
P
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
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
 
|
 
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
>
;


 
 
m
e
s
s
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
p
:
 
(
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
)
[
]
;


 
 
j
u
s
t
?
:
 
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
;


 
 
d
e
p
I
n
d
i
c
e
s
?
:
 
n
u
m
b
e
r
[
]
;


 
 
m
e
m
o
H
i
t
?
:
 
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
;


 
 
n
o
d
e
s
?
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
;


 
 
a
c
t
i
v
e
I
d
?
:
 
s
t
r
i
n
g
;


 
 
c
a
l
l
s
?
:
 
n
u
m
b
e
r
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
u
i
l
d
:
 
T
o
p
-
d
o
w
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
b
u
i
l
d
T
o
p
D
o
w
n
(
k
e
y
:
 
P
r
o
b
l
e
m
K
e
y
,
 
p
a
r
s
e
d
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
:
 
D
P
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
c
f
g
 
=
 
P
R
O
B
L
E
M
S
[
k
e
y
]
;


 
 
c
o
n
s
t
 
u
p
t
o
 
=
 
c
f
g
.
u
p
t
o
(
p
a
r
s
e
d
)
;


 
 
c
o
n
s
t
 
d
p
:
 
(
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
)
[
]
 
=
 
A
r
r
a
y
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
1
,
 
u
p
t
o
 
+
 
1
)
)
.
f
i
l
l
(
n
u
l
l
)
;


 
 
c
f
g
.
b
a
s
e
C
a
s
e
F
o
r
(
p
a
r
s
e
d
)
.
f
o
r
E
a
c
h
(
(
i
)
 
=
>
 
{
 
d
p
[
i
]
 
=
 
c
f
g
.
b
a
s
e
V
a
l
u
e
(
i
,
 
p
a
r
s
e
d
)
;
 
}
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
D
P
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
n
o
d
e
s
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
 
=
 
[
]
;


 
 
l
e
t
 
i
d
C
o
u
n
t
e
r
 
=
 
0
;


 
 
l
e
t
 
c
a
l
l
s
 
=
 
0
;




 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
n
:
 
p
a
r
s
e
d
.
n
 
}
,
 
m
e
s
s
a
g
e
:
 
"
S
t
a
r
t
 
w
i
t
h
 
a
n
 
e
m
p
t
y
 
m
e
m
o
 
t
a
b
l
e
.
"
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
n
o
d
e
s
:
 
[
]
,
 
c
a
l
l
s
:
 
0
 
}
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
 
r
e
c
u
r
s
e
(
i
:
 
n
u
m
b
e
r
,
 
d
e
p
t
h
:
 
n
u
m
b
e
r
,
 
p
a
r
e
n
t
?
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
 
{


 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
`
t
n
-
$
{
i
d
C
o
u
n
t
e
r
+
+
}
`
;


 
 
 
 
c
a
l
l
s
+
+
;


 
 
 
 
c
o
n
s
t
 
n
o
d
e
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
 
=
 
{
 
i
d
,
 
l
a
b
e
l
:
 
`
f
(
$
{
i
}
)
`
,
 
p
a
r
e
n
t
,
 
d
e
p
t
h
,
 
s
t
a
t
e
:
 
"
a
c
t
i
v
e
"
 
}
;


 
 
 
 
n
o
d
e
s
.
p
u
s
h
(
n
o
d
e
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
i
,
 
c
a
l
l
s
,
 
m
e
m
o
:
 
d
p
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
x
 
!
=
=
 
n
u
l
l
)
.
l
e
n
g
t
h
 
}
,
 
m
e
s
s
a
g
e
:
 
`
E
n
t
e
r
 
f
(
$
{
i
}
)
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
n
o
d
e
s
:
 
n
o
d
e
s
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
 
(
{
 
.
.
.
x
 
}
)
)
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
c
a
l
l
s
 
}
)
;




 
 
 
 
i
f
 
(
d
p
[
i
]
 
!
=
=
 
n
u
l
l
 
&
&
 
!
c
f
g
.
b
a
s
e
C
a
s
e
F
o
r
(
p
a
r
s
e
d
)
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
i
)
)
 
{


 
 
 
 
 
 
n
o
d
e
.
r
e
t
u
r
n
V
a
l
u
e
 
=
 
d
p
[
i
]
!
;


 
 
 
 
 
 
n
o
d
e
.
s
t
a
t
e
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
h
i
t
:
 
d
p
[
i
]
!
,
 
c
a
l
l
s
 
}
,
 
m
e
s
s
a
g
e
:
 
`
M
e
m
o
 
h
i
t
!
 
f
(
$
{
i
}
)
 
=
 
$
{
d
p
[
i
]
}
.
 
R
e
t
u
r
n
 
i
m
m
e
d
i
a
t
e
l
y
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
n
o
d
e
s
:
 
n
o
d
e
s
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
 
(
{
 
.
.
.
x
 
}
)
)
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
m
e
m
o
H
i
t
:
 
i
,
 
c
a
l
l
s
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
d
p
[
i
]
!
;


 
 
 
 
}




 
 
 
 
i
f
 
(
c
f
g
.
b
a
s
e
C
a
s
e
F
o
r
(
p
a
r
s
e
d
)
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
i
)
)
 
{


 
 
 
 
 
 
n
o
d
e
.
r
e
t
u
r
n
V
a
l
u
e
 
=
 
d
p
[
i
]
!
;


 
 
 
 
 
 
n
o
d
e
.
s
t
a
t
e
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
i
,
 
b
a
s
e
:
 
d
p
[
i
]
!
,
 
c
a
l
l
s
 
}
,
 
m
e
s
s
a
g
e
:
 
`
B
a
s
e
 
c
a
s
e
:
 
f
(
$
{
i
}
)
 
=
 
$
{
d
p
[
i
]
}
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
n
o
d
e
s
:
 
n
o
d
e
s
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
 
(
{
 
.
.
.
x
 
}
)
)
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
j
u
s
t
:
 
i
,
 
c
a
l
l
s
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
d
p
[
i
]
!
;


 
 
 
 
}




 
 
 
 
c
o
n
s
t
 
t
m
p
D
p
:
 
n
u
m
b
e
r
[
]
 
=
 
d
p
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
 
=
=
=
 
n
u
l
l
 
?
 
0
 
:
 
x
)
;


 
 
 
 
c
o
n
s
t
 
{
 
d
e
p
s
 
}
 
=
 
c
f
g
.
r
e
c
u
r
r
e
n
c
e
(
t
m
p
D
p
,
 
i
,
 
p
a
r
s
e
d
.
e
x
t
r
a
)
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
d
 
o
f
 
d
e
p
s
)
 
{


 
 
 
 
 
 
i
f
 
(
d
 
<
 
0
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
i
,
 
r
e
c
u
r
s
e
T
o
:
 
d
,
 
c
a
l
l
s
 
}
,
 
m
e
s
s
a
g
e
:
 
`
R
e
c
u
r
s
e
 
i
n
t
o
 
f
(
$
{
d
}
)
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
n
o
d
e
s
:
 
n
o
d
e
s
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
 
(
{
 
.
.
.
x
 
}
)
)
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
c
a
l
l
s
 
}
)
;


 
 
 
 
 
 
r
e
c
u
r
s
e
(
d
,
 
d
e
p
t
h
 
+
 
1
,
 
i
d
)
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
l
D
p
:
 
n
u
m
b
e
r
[
]
 
=
 
d
p
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
 
=
=
=
 
n
u
l
l
 
?
 
0
 
:
 
x
)
;


 
 
 
 
c
o
n
s
t
 
{
 
v
a
l
u
e
 
}
 
=
 
c
f
g
.
r
e
c
u
r
r
e
n
c
e
(
r
e
a
l
D
p
,
 
i
,
 
p
a
r
s
e
d
.
e
x
t
r
a
)
;


 
 
 
 
d
p
[
i
]
 
=
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
v
a
l
u
e
)
 
?
 
v
a
l
u
e
 
:
 
-
1
;


 
 
 
 
n
o
d
e
.
r
e
t
u
r
n
V
a
l
u
e
 
=
 
d
p
[
i
]
 
?
?
 
"
?
"
;


 
 
 
 
n
o
d
e
.
s
t
a
t
e
 
=
 
"
d
o
n
e
"
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
i
,
 
v
a
l
u
e
:
 
d
p
[
i
]
!
,
 
c
a
l
l
s
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
o
m
p
u
t
e
d
 
f
(
$
{
i
}
)
 
=
 
$
{
d
p
[
i
]
}
.
 
S
t
o
r
e
 
i
n
 
m
e
m
o
 
a
n
d
 
r
e
t
u
r
n
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
n
o
d
e
s
:
 
n
o
d
e
s
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
 
(
{
 
.
.
.
x
 
}
)
)
,
 
a
c
t
i
v
e
I
d
:
 
i
d
,
 
j
u
s
t
:
 
i
,
 
c
a
l
l
s
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
d
p
[
i
]
!
;


 
 
}




 
 
r
e
c
u
r
s
e
(
u
p
t
o
,
 
0
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
u
i
l
d
:
 
B
o
t
t
o
m
-
u
p
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
b
u
i
l
d
B
o
t
t
o
m
U
p
(
k
e
y
:
 
P
r
o
b
l
e
m
K
e
y
,
 
p
a
r
s
e
d
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
:
 
D
P
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
c
f
g
 
=
 
P
R
O
B
L
E
M
S
[
k
e
y
]
;


 
 
c
o
n
s
t
 
u
p
t
o
 
=
 
c
f
g
.
u
p
t
o
(
p
a
r
s
e
d
)
;


 
 
c
o
n
s
t
 
d
p
:
 
(
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
)
[
]
 
=
 
A
r
r
a
y
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
1
,
 
u
p
t
o
 
+
 
1
)
)
.
f
i
l
l
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
 
f
r
a
m
e
s
:
 
D
P
F
r
a
m
e
[
]
 
=
 
[
]
;




 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
n
:
 
p
a
r
s
e
d
.
n
 
}
,
 
m
e
s
s
a
g
e
:
 
"
I
n
i
t
i
a
l
i
z
e
 
d
p
 
t
a
b
l
e
 
w
i
t
h
 
b
a
s
e
 
c
a
s
e
s
.
"
,
 
d
p
:
 
[
.
.
.
d
p
]
 
}
)
;




 
 
f
o
r
 
(
c
o
n
s
t
 
b
c
 
o
f
 
c
f
g
.
b
a
s
e
C
a
s
e
F
o
r
(
p
a
r
s
e
d
)
)
 
{


 
 
 
 
d
p
[
b
c
]
 
=
 
c
f
g
.
b
a
s
e
V
a
l
u
e
(
b
c
,
 
p
a
r
s
e
d
)
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
i
:
 
b
c
,
 
b
a
s
e
:
 
d
p
[
b
c
]
!
 
}
,
 
m
e
s
s
a
g
e
:
 
`
B
a
s
e
:
 
d
p
[
$
{
b
c
}
]
 
=
 
$
{
d
p
[
b
c
]
}
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
j
u
s
t
:
 
b
c
 
}
)
;


 
 
}




 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
c
f
g
.
f
r
o
m
I
(
p
a
r
s
e
d
)
;
 
i
 
<
=
 
u
p
t
o
;
 
i
+
+
)
 
{


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
i
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
o
m
p
u
t
e
 
d
p
[
$
{
i
}
]
 
u
s
i
n
g
 
p
r
e
v
i
o
u
s
l
y
 
f
i
l
l
e
d
 
c
e
l
l
s
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
 
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
a
l
D
p
:
 
n
u
m
b
e
r
[
]
 
=
 
d
p
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
 
=
=
=
 
n
u
l
l
 
?
 
0
 
:
 
x
)
;


 
 
 
 
c
o
n
s
t
 
{
 
v
a
l
u
e
,
 
d
e
p
s
 
}
 
=
 
c
f
g
.
r
e
c
u
r
r
e
n
c
e
(
r
e
a
l
D
p
,
 
i
,
 
p
a
r
s
e
d
.
e
x
t
r
a
)
;


 
 
 
 
d
p
[
i
]
 
=
 
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
v
a
l
u
e
)
 
?
 
v
a
l
u
e
 
:
 
-
1
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
v
a
l
u
e
:
 
d
p
[
i
]
!
 
}
,
 
m
e
s
s
a
g
e
:
 
`
d
p
[
$
{
i
}
]
 
=
 
$
{
d
p
[
i
]
}
 
(
d
e
p
e
n
d
s
 
o
n
 
$
{
d
e
p
s
.
m
a
p
(
(
d
)
 
=
>
 
`
d
p
[
$
{
d
}
]
=
$
{
d
p
[
d
]
 
?
?
 
"
?
"
}
`
)
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
)
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
j
u
s
t
:
 
i
,
 
d
e
p
I
n
d
i
c
e
s
:
 
d
e
p
s
 
}
)
;


 
 
}


 
 
f
r
a
m
e
s
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
a
n
s
w
e
r
:
 
d
p
[
u
p
t
o
]
 
?
?
 
-
1
 
}
,
 
m
e
s
s
a
g
e
:
 
`
D
o
n
e
.
 
A
n
s
w
e
r
 
=
 
d
p
[
$
{
u
p
t
o
}
]
 
=
 
$
{
d
p
[
u
p
t
o
]
 
?
?
 
"
n
/
a
"
}
.
`
,
 
d
p
:
 
[
.
.
.
d
p
]
,
 
j
u
s
t
:
 
u
p
t
o
 
}
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
N
a
i
v
e
 
c
a
l
l
 
c
o
u
n
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
c
o
u
n
t
N
a
i
v
e
C
a
l
l
s
(
k
e
y
:
 
P
r
o
b
l
e
m
K
e
y
,
 
p
a
r
s
e
d
:
 
{
 
n
:
 
n
u
m
b
e
r
;
 
e
x
t
r
a
?
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
m
b
e
r
 
}
)
:
 
n
u
m
b
e
r
 
{


 
 
c
o
n
s
t
 
{
 
n
,
 
e
x
t
r
a
 
}
 
=
 
p
a
r
s
e
d
;


 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
f
i
b
"
 
|
|
 
k
e
y
 
=
=
=
 
"
s
t
a
i
r
s
"
)
 
{


 
 
 
 
c
o
n
s
t
 
a
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
=
 
n
;
 
i
+
+
)
 
{
 
i
f
 
(
i
 
<
 
2
)
 
a
.
p
u
s
h
(
1
)
;
 
e
l
s
e
 
a
.
p
u
s
h
(
a
[
i
 
-
 
1
]
 
+
 
a
[
i
 
-
 
2
]
 
+
 
1
)
;
 
}


 
 
 
 
r
e
t
u
r
n
 
a
[
n
]
 
?
?
 
1
;


 
 
}


 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
r
o
b
"
)
 
{


 
 
 
 
c
o
n
s
t
 
a
r
r
 
=
 
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
;


 
 
 
 
c
o
n
s
t
 
m
e
m
o
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
n
u
m
b
e
r
>
 
=
 
{
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
 
g
o
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
:
 
n
u
m
b
e
r
 
{


 
 
 
 
 
 
i
f
 
(
i
 
<
 
0
)
 
r
e
t
u
r
n
 
1
;


 
 
 
 
 
 
i
f
 
(
m
e
m
o
[
i
]
 
!
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
)
 
r
e
t
u
r
n
 
m
e
m
o
[
i
]
;


 
 
 
 
 
 
r
e
t
u
r
n
 
(
m
e
m
o
[
i
]
 
=
 
g
o
(
i
 
-
 
1
)
 
+
 
g
o
(
i
 
-
 
2
)
 
+
 
1
)
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
g
o
(
a
r
r
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


 
 
i
f
 
(
k
e
y
 
=
=
=
 
"
c
o
i
n
"
)
 
{


 
 
 
 
c
o
n
s
t
 
c
o
i
n
s
 
=
 
e
x
t
r
a
 
a
s
 
n
u
m
b
e
r
[
]
;


 
 
 
 
c
o
n
s
t
 
c
a
p
 
=
 
M
a
t
h
.
m
i
n
(
2
5
,
 
n
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
 
g
o
(
a
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
 
 
 
 
i
f
 
(
a
 
<
=
 
0
)
 
r
e
t
u
r
n
 
1
;


 
 
 
 
 
 
l
e
t
 
s
 
=
 
1
;


 
 
 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
c
 
o
f
 
c
o
i
n
s
)
 
i
f
 
(
c
 
<
=
 
a
)
 
s
 
+
=
 
g
o
(
a
 
-
 
c
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
s
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
g
o
(
c
a
p
)
;


 
 
}


 
 
r
e
t
u
r
n
 
0
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
D
P
M
o
d
e
 
=
 
"
t
o
p
-
d
o
w
n
"
 
|
 
"
b
o
t
t
o
m
-
u
p
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
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
p
r
o
b
l
e
m
K
e
y
,
 
s
e
t
P
r
o
b
l
e
m
K
e
y
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
P
r
o
b
l
e
m
K
e
y
>
(
"
f
i
b
"
)
;


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
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
D
P
M
o
d
e
>
(
"
t
o
p
-
d
o
w
n
"
)
;


 
 
c
o
n
s
t
 
c
f
g
 
=
 
P
R
O
B
L
E
M
S
[
p
r
o
b
l
e
m
K
e
y
]
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
,
 
s
e
t
I
n
p
u
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
(
(
)
 
=
>
 
c
f
g
.
p
r
e
s
e
t
s
[
0
]
.
v
a
l
u
e
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
I
n
p
u
t
(
c
f
g
.
p
r
e
s
e
t
s
[
0
]
.
v
a
l
u
e
)
;


 
 
}
,
 
[
p
r
o
b
l
e
m
K
e
y
]
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
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
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
 
c
f
g
.
p
a
r
s
e
I
n
p
u
t
(
i
n
p
u
t
)
,
 
[
i
n
p
u
t
,
 
c
f
g
]
)
;


 
 
c
o
n
s
t
 
l
a
b
e
l
s
 
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
 
c
f
g
.
b
a
s
e
L
a
b
e
l
s
(
p
a
r
s
e
d
)
,
 
[
p
a
r
s
e
d
,
 
c
f
g
]
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
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
m
o
d
e
 
=
=
=
 
"
t
o
p
-
d
o
w
n
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
T
o
p
D
o
w
n
(
p
r
o
b
l
e
m
K
e
y
,
 
p
a
r
s
e
d
)
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
B
o
t
t
o
m
U
p
(
p
r
o
b
l
e
m
K
e
y
,
 
p
a
r
s
e
d
)
;


 
 
}
,
 
[
p
r
o
b
l
e
m
K
e
y
,
 
m
o
d
e
,
 
p
a
r
s
e
d
]
)
;




 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=
 
m
o
d
e
 
=
=
=
 
"
t
o
p
-
d
o
w
n
"
 
?
 
c
f
g
.
p
s
e
u
d
o
T
o
p
 
:
 
c
f
g
.
p
s
e
u
d
o
B
o
t
t
o
m
;




 
 
c
o
n
s
t
 
n
a
i
v
e
C
a
l
l
s
 
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
 
c
o
u
n
t
N
a
i
v
e
C
a
l
l
s
(
p
r
o
b
l
e
m
K
e
y
,
 
p
a
r
s
e
d
)
,
 
[
p
r
o
b
l
e
m
K
e
y
,
 
p
a
r
s
e
d
]
)
;


 
 
c
o
n
s
t
 
m
e
m
o
C
a
l
l
s
 
=
 
f
r
a
m
e
s
[
f
r
a
m
e
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
]
?
.
c
a
l
l
s
 
?
?
 
0
;


 
 
c
o
n
s
t
 
b
o
t
t
o
m
U
p
O
p
s
 
=
 
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
 
c
f
g
.
u
p
t
o
(
p
a
r
s
e
d
)
 
+
 
1
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
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
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
c
f
g
.
l
a
b
e
l
}
 
-
 
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
t
o
p
-
d
o
w
n
"
 
?
 
"
T
o
p
-
D
o
w
n
 
M
e
m
o
i
z
a
t
i
o
n
"
 
:
 
"
B
o
t
t
o
m
-
U
p
 
T
a
b
u
l
a
t
i
o
n
"
}
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
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
P
R
O
B
L
E
M
S
)
 
a
s
 
P
r
o
b
l
e
m
K
e
y
[
]
)
.
m
a
p
(
(
k
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
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
k
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
 
s
e
t
P
r
o
b
l
e
m
K
e
y
(
k
)
}
 
a
c
t
i
v
e
=
{
p
r
o
b
l
e
m
K
e
y
 
=
=
=
 
k
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
"
t
e
x
t
-
x
s
"
>
{
P
R
O
B
L
E
M
S
[
k
]
.
l
a
b
e
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
P
i
l
l
B
u
t
t
o
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
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
t
o
p
-
d
o
w
n
"
,
 
"
b
o
t
t
o
m
-
u
p
"
]
 
a
s
 
D
P
M
o
d
e
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
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
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
t
M
o
d
e
(
m
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
x
s
 
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
 
b
o
r
d
e
r
 
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
 
$
{
m
o
d
e
 
=
=
=
 
m
 
?
 
"
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
5
0
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
4
0
0
/
1
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
l
i
m
e
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
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
 
=
=
=
 
"
t
o
p
-
d
o
w
n
"
 
?
 
"
T
o
p
-
D
o
w
n
 
(
r
e
c
u
r
s
i
o
n
 
+
 
m
e
m
o
)
"
 
:
 
"
B
o
t
t
o
m
-
U
p
 
(
t
a
b
u
l
a
t
i
o
n
)
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
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
I
n
p
u
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
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
c
f
g
.
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


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
b
l
e
m
K
e
y
 
=
=
=
 
"
c
o
i
n
"
 
?
 
"
F
o
r
m
a
t
:
 
a
m
o
u
n
t
 
|
 
c
o
i
n
1
,
 
c
o
i
n
2
,
 
.
.
.
"
 
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
b
l
e
m
K
e
y
 
=
=
=
 
"
r
o
b
"
 
?
 
"
C
o
m
m
a
/
s
p
a
c
e
-
s
e
p
a
r
a
t
e
d
 
h
o
u
s
e
 
v
a
l
u
e
s
.
"
 
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
I
n
t
e
g
e
r
 
n
 
(
b
o
u
n
d
e
d
 
f
o
r
 
r
e
a
d
a
b
i
l
i
t
y
)
.
"


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
c
f
g
.
p
r
e
s
e
t
s
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
s
e
t
I
n
p
u
t
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
 
g
a
p
-
4
 
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
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
N
a
i
v
e
:
 
<
s
t
r
o
n
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
t
e
x
t
-
r
o
s
e
-
6
0
0
"
>
{
n
a
i
v
e
C
a
l
l
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
<
/
s
t
r
o
n
g
>
 
c
a
l
l
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
t
o
p
-
d
o
w
n
"
 
&
&
 
<
s
p
a
n
>
M
e
m
o
i
z
e
d
:
 
<
s
t
r
o
n
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
t
e
x
t
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
>
{
m
e
m
o
C
a
l
l
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
<
/
s
t
r
o
n
g
>
 
c
a
l
l
s
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
T
a
b
u
l
a
t
i
o
n
:
 
<
s
t
r
o
n
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
l
i
m
e
-
4
0
0
"
>
{
b
o
t
t
o
m
U
p
O
p
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
<
/
s
t
r
o
n
g
>
 
w
r
i
t
e
s
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
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
[
"
v
a
l
u
e
"
,
 
"
h
i
t
"
,
 
"
c
a
l
l
s
"
]
}
 
/
>
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
 
g
a
p
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
s
t
o
n
e
-
5
0
0
 
f
l
e
x
-
w
r
a
p
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
w
-
2
.
5
 
h
-
2
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
s
m
 
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
j
u
s
t
 
f
i
l
l
e
d
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
w
-
2
.
5
 
h
-
2
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
s
m
 
b
g
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
 
/
>
d
e
p
e
n
d
e
n
c
y
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
w
-
2
.
5
 
h
-
2
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
s
m
 
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
4
0
0
"
 
/
>
m
e
m
o
 
h
i
t
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


 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
t
o
p
-
d
o
w
n
"
 
&
&
 
f
r
a
m
e
?
.
n
o
d
e
s
 
&
&
 
f
r
a
m
e
.
n
o
d
e
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
M
i
n
i
R
e
c
u
r
s
i
o
n
T
r
e
e
 
n
o
d
e
s
=
{
f
r
a
m
e
.
n
o
d
e
s
}
 
a
c
t
i
v
e
I
d
=
{
f
r
a
m
e
.
a
c
t
i
v
e
I
d
}
 
h
e
i
g
h
t
=
{
2
4
0
}
 
/
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
D
P
T
a
b
l
e
 
d
p
=
{
f
r
a
m
e
?
.
d
p
 
?
?
 
[
]
}
 
j
u
s
t
=
{
f
r
a
m
e
?
.
j
u
s
t
}
 
d
e
p
s
=
{
f
r
a
m
e
?
.
d
e
p
I
n
d
i
c
e
s
}
 
m
e
m
o
H
i
t
=
{
f
r
a
m
e
?
.
m
e
m
o
H
i
t
}
 
l
a
b
e
l
s
=
{
l
a
b
e
l
s
}
 
/
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
b
e
g
i
n
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
a
t
 
i
s
 
D
P
?
"
,
 
b
o
d
y
:
 
"
D
y
n
a
m
i
c
 
p
r
o
g
r
a
m
m
i
n
g
 
=
 
r
e
c
u
r
s
i
o
n
 
w
i
t
h
 
m
e
m
o
i
z
a
t
i
o
n
.
 
W
h
e
n
 
a
 
r
e
c
u
r
s
i
v
e
 
s
o
l
u
t
i
o
n
 
s
o
l
v
e
s
 
t
h
e
 
s
a
m
e
 
s
u
b
p
r
o
b
l
e
m
 
m
a
n
y
 
t
i
m
e
s
,
 
c
a
c
h
e
 
t
h
e
 
a
n
s
w
e
r
.
 
T
h
e
 
c
o
m
p
l
e
x
i
t
y
 
d
r
o
p
s
 
f
r
o
m
 
e
x
p
o
n
e
n
t
i
a
l
 
t
o
 
p
o
l
y
n
o
m
i
a
l
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
w
o
 
s
t
y
l
e
s
"
,
 
b
o
d
y
:
 
"
T
o
p
-
d
o
w
n
 
(
m
e
m
o
i
z
a
t
i
o
n
)
:
 
w
r
i
t
e
 
t
h
e
 
r
e
c
u
r
s
i
o
n
 
n
a
t
u
r
a
l
l
y
,
 
a
d
d
 
a
 
c
a
c
h
e
.
 
B
o
t
t
o
m
-
u
p
 
(
t
a
b
u
l
a
t
i
o
n
)
:
 
b
u
i
l
d
 
t
h
e
 
d
p
 
t
a
b
l
e
 
i
t
e
r
a
t
i
v
e
l
y
 
f
r
o
m
 
t
h
e
 
b
a
s
e
 
c
a
s
e
 
u
p
.
 
B
o
t
h
 
c
o
m
p
u
t
e
 
t
h
e
 
s
a
m
e
 
a
n
s
w
e
r
 
-
 
p
i
c
k
 
b
y
 
c
o
n
v
e
n
i
e
n
c
e
 
a
n
d
 
s
t
a
c
k
-
s
a
f
e
t
y
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
e
n
 
t
o
 
u
s
e
 
D
P
"
,
 
b
o
d
y
:
 
"
T
w
o
 
p
r
o
p
e
r
t
i
e
s
:
 
(
1
)
 
O
v
e
r
l
a
p
p
i
n
g
 
s
u
b
p
r
o
b
l
e
m
s
 
-
 
n
a
i
v
e
 
r
e
c
u
r
s
i
o
n
 
r
e
c
o
m
p
u
t
e
s
 
t
h
e
 
s
a
m
e
 
t
h
i
n
g
.
 
(
2
)
 
O
p
t
i
m
a
l
 
s
u
b
s
t
r
u
c
t
u
r
e
 
-
 
a
n
 
o
p
t
i
m
a
l
 
a
n
s
w
e
r
 
t
o
 
t
h
e
 
w
h
o
l
e
 
i
n
c
l
u
d
e
s
 
o
p
t
i
m
a
l
 
a
n
s
w
e
r
s
 
t
o
 
s
u
b
-
p
i
e
c
e
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
e
 
3
 
s
t
e
p
s
"
,
 
b
o
d
y
:
 
"
(
a
)
 
D
e
f
i
n
e
 
t
h
e
 
s
t
a
t
e
:
 
w
h
a
t
 
d
o
e
s
 
d
p
[
i
]
 
m
e
a
n
?
 
(
b
)
 
W
r
i
t
e
 
t
h
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
:
 
d
p
[
i
]
 
i
n
 
t
e
r
m
s
 
o
f
 
s
m
a
l
l
e
r
 
i
n
d
i
c
e
s
.
 
(
c
)
 
S
p
e
c
i
f
y
 
b
a
s
e
 
c
a
s
e
s
.
 
W
r
i
t
e
 
t
h
e
 
s
t
a
t
e
 
f
i
r
s
t
 
-
 
e
v
e
r
y
t
h
i
n
g
 
e
l
s
e
 
f
o
l
l
o
w
s
.
"
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
r
o
w
s
 
=
 
[


 
 
 
 
[
"
F
i
b
o
n
a
c
c
i
"
,
 
"
d
p
[
i
]
 
=
 
d
p
[
i
-
1
]
 
+
 
d
p
[
i
-
2
]
"
]
,


 
 
 
 
[
"
C
l
i
m
b
i
n
g
 
S
t
a
i
r
s
"
,
 
"
d
p
[
i
]
 
=
 
d
p
[
i
-
1
]
 
+
 
d
p
[
i
-
2
]
"
]
,


 
 
 
 
[
"
H
o
u
s
e
 
R
o
b
b
e
r
"
,
 
"
d
p
[
i
]
 
=
 
m
a
x
(
d
p
[
i
-
1
]
,
 
d
p
[
i
-
2
]
 
+
 
h
[
i
]
)
"
]
,


 
 
 
 
[
"
C
o
i
n
 
C
h
a
n
g
e
"
,
 
"
d
p
[
i
]
 
=
 
m
i
n
(
d
p
[
i
-
c
]
+
1
)
 
o
v
e
r
 
c
o
i
n
s
 
c
"
]
,


 
 
]
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
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
M
e
n
t
a
l
 
m
o
d
e
l
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
C
o
m
p
u
t
e
 
e
a
c
h
 
s
u
b
p
r
o
b
l
e
m
 
o
n
c
e
.
 
L
o
o
k
 
i
t
 
u
p
 
f
o
r
e
v
e
r
.
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
P
i
c
t
u
r
e
 
F
i
b
o
n
a
c
c
i
&
a
p
o
s
;
s
 
c
a
l
l
 
t
r
e
e
 
-
 
m
o
s
t
 
b
r
a
n
c
h
e
s
 
c
o
m
p
u
t
e
 
f
i
b
(
5
)
 
o
v
e
r
 
a
n
d
 
o
v
e
r
.
 
D
P
 
s
a
y
s
:


 
 
 
 
 
 
 
 
 
 
c
o
m
p
u
t
e
 
e
a
c
h
 
s
u
b
p
r
o
b
l
e
m
 
o
n
c
e
,
 
w
r
i
t
e
 
t
h
e
 
a
n
s
w
e
r
 
o
n
 
a
 
p
i
e
c
e
 
o
f
 
p
a
p
e
r
 
(
d
p
 
t
a
b
l
e
)
,


 
 
 
 
 
 
 
 
 
 
a
n
d
 
l
o
o
k
 
i
t
 
u
p
 
e
v
e
r
y
 
f
u
t
u
r
e
 
t
i
m
e
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
4
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
c
a
r
d
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
b
o
l
d
 
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
l
i
m
e
-
4
0
0
 
m
b
-
1
.
5
 
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
"
>
0
{
i
 
+
 
1
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
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
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
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
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
t
a
b
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
f
u
l
l
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
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
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
P
r
o
b
l
e
m
"
,
 
"
R
e
c
u
r
r
e
n
c
e
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
k
e
y
=
{
h
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
{
h
}
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
r
[
0
]
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
 
=
=
=
 
0
 
?
 
"
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
w
h
i
t
e
/
5
"
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
1
0
0
"
>
{
r
[
0
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
4
 
p
y
-
2
 
f
o
n
t
-
m
o
n
o
 
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
"
>
{
r
[
1
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
F
i
b
o
n
a
c
c
i
 
w
i
t
h
 
m
e
m
o
i
z
a
t
i
o
n
 
-
 
f
i
b
(
3
0
)
 
c
a
l
l
s
 
h
o
w
 
m
a
n
y
 
s
u
b
p
r
o
b
l
e
m
s
?
"
,
 
a
:
 
"
3
1
"
,
 
h
i
n
t
:
 
"
E
a
c
h
 
f
i
b
(
k
)
 
f
o
r
 
k
=
0
.
.
3
0
 
i
s
 
c
o
m
p
u
t
e
d
 
e
x
a
c
t
l
y
 
o
n
c
e
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
C
l
i
m
b
i
n
g
 
s
t
a
i
r
s
 
n
=
5
.
 
N
u
m
b
e
r
 
o
f
 
w
a
y
s
?
"
,
 
a
:
 
"
8
"
,
 
h
i
n
t
:
 
"
1
,
1
,
2
,
3
,
5
,
8
 
-
 
F
i
b
o
n
a
c
c
i
 
p
a
t
t
e
r
n
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
H
o
u
s
e
 
R
o
b
b
e
r
 
[
2
,
7
,
9
,
3
,
1
]
.
 
M
a
x
 
l
o
o
t
?
"
,
 
a
:
 
"
1
2
"
,
 
h
i
n
t
:
 
"
R
o
b
 
2
+
9
+
1
 
=
 
1
2
.
"
 
}
,


 
 
 
 
{
 
q
:
 
"
C
o
i
n
 
C
h
a
n
g
e
 
a
m
o
u
n
t
=
1
1
,
 
c
o
i
n
s
=
[
1
,
2
,
5
]
.
 
M
i
n
 
c
o
i
n
s
?
"
,
 
a
:
 
"
3
"
,
 
h
i
n
t
:
 
"
5
+
5
+
1
 
=
 
1
1
 
→
 
3
 
c
o
i
n
s
.
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
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
<
(
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
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
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
h
o
w
n
,
 
s
e
t
S
h
o
w
n
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
W
o
r
k
 
t
h
r
o
u
g
h
 
e
a
c
h
 
r
e
c
u
r
r
e
n
c
e
 
b
y
 
h
a
n
d
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
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
 
g
 
=
 
g
u
e
s
s
e
s
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
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
 
=
 
g
 
!
=
=
 
n
u
l
l
 
&
&
 
g
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
 
f
l
e
x
-
w
r
a
p
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
#
{
i
 
+
 
1
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
f
l
e
x
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
1
0
0
"
>
{
p
.
q
}
<
/
s
p
a
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
a
n
s
w
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
g
 
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
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
v
[
i
]
 
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
v
a
l
u
e
;
 
s
e
t
G
u
e
s
s
e
s
(
v
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
w
-
2
4
 
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
1
0
0
 
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
m
 
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
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
(
v
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
x
-
3
 
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
x
s
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
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
{
`
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
 
p
x
-
3
 
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
 
$
{
c
o
r
r
e
c
t
 
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
l
i
m
e
-
2
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
l
i
m
e
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
o
s
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
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
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
t
e
x
t
-
r
o
s
e
-
2
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
r
o
s
e
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
c
o
r
r
e
c
t
 
?
 
`
✓
 
$
{
p
.
a
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
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


 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
v
e
a
l
e
d
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
H
i
n
t
:
 
{
p
.
h
i
n
t
}
<
/
C
a
l
l
o
u
t
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
C
a
r
d
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


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
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
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
o
p
-
d
o
w
n
 
v
s
 
B
o
t
t
o
m
-
u
p
 
t
r
a
d
e
-
o
f
f
s
<
/
S
u
b
H
e
a
d
i
n
g
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


 
 
 
 
 
 
 
 
 
 
T
o
p
-
d
o
w
n
 
i
s
 
e
a
s
i
e
r
 
t
o
 
w
r
i
t
e
 
f
r
o
m
 
t
h
e
 
r
e
c
u
r
s
i
v
e
 
s
p
e
c
 
-
 
y
o
u
 
o
n
l
y
 
f
i
l
l
 
c
e
l
l
s
 
y
o
u
 
a
c
t
u
a
l
l
y
 
n
e
e
d
.
 
B
o
t
t
o
m
-
u
p
 
a
v
o
i
d
s
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
 
a
n
d
 
i
s
 
u
s
u
a
l
l
y
 
s
l
i
g
h
t
l
y
 
f
a
s
t
e
r
 
i
n
 
p
r
a
c
t
i
c
e
 
b
e
c
a
u
s
e
 
i
t
 
d
o
e
s
n
&
a
p
o
s
;
t
 
p
a
y
 
f
u
n
c
t
i
o
n
-
c
a
l
l
 
o
v
e
r
h
e
a
d
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
S
p
a
c
e
 
o
p
t
i
m
i
z
a
t
i
o
n
<
/
S
u
b
H
e
a
d
i
n
g
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


 
 
 
 
 
 
 
 
 
 
M
a
n
y
 
1
D
 
D
P
s
 
o
n
l
y
 
l
o
o
k
 
a
t
 
t
h
e
 
l
a
s
t
 
f
e
w
 
c
e
l
l
s
.
 
F
i
b
o
n
a
c
c
i
 
n
e
e
d
s
 
j
u
s
t
 
t
w
o
 
v
a
r
i
a
b
l
e
s
 
(
p
r
e
v
,
 
c
u
r
r
)
 
-
 
O
(
1
)
 
s
p
a
c
e
.
 
H
o
u
s
e
 
R
o
b
b
e
r
 
t
o
o
.
 
A
l
w
a
y
s
 
c
h
e
c
k
:
 
&
q
u
o
t
;
d
o
e
s
 
d
p
[
i
]
 
o
n
l
y
 
d
e
p
e
n
d
 
o
n
 
t
h
e
 
l
a
s
t
 
k
 
c
e
l
l
s
?
&
q
u
o
t
;


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
t
e
r
v
i
e
w
 
c
h
e
c
k
l
i
s
t
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
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
l
i
s
t
-
d
i
s
c
 
p
l
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
l
i
>
W
r
i
t
e
 
s
t
a
t
e
 
+
 
r
e
c
u
r
r
e
n
c
e
 
+
 
b
a
s
e
 
c
a
s
e
 
o
n
 
p
a
p
e
r
 
B
E
F
O
R
E
 
c
o
d
i
n
g
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
N
a
i
v
e
 
F
i
b
o
n
a
c
c
i
 
i
s
 
O
(
2
ⁿ
)
;
 
m
e
m
o
 
m
a
k
e
s
 
i
t
 
O
(
n
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
o
i
n
 
c
h
a
n
g
e
 
h
a
s
 
O
(
a
m
o
u
n
t
 
·
 
c
o
i
n
s
)
 
t
i
m
e
,
 
O
(
a
m
o
u
n
t
)
 
s
p
a
c
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
H
o
u
s
e
 
R
o
b
b
e
r
 
i
s
 
t
h
e
 
c
a
n
o
n
i
c
a
l
 
&
q
u
o
t
;
p
i
c
k
 
o
r
 
s
k
i
p
&
q
u
o
t
;
 
p
a
t
t
e
r
n
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
L
6
_
D
P
1
D
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[
{
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,
 
l
a
b
e
l
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
,
 
i
c
o
n
:
 
<
C
o
d
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
 
}
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
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
 
=
 
[


 
 
 
 
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
W
h
a
t
 
i
s
 
t
h
e
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
n
a
i
v
e
 
r
e
c
u
r
s
i
v
e
 
F
i
b
o
n
a
c
c
i
 
v
s
 
m
e
m
o
i
z
e
d
?
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
O
(
n
)
 
v
s
 
O
(
n
)
"
,
 
"
O
(
2
ⁿ
)
 
v
s
 
O
(
n
)
"
,
 
"
O
(
2
ⁿ
)
 
v
s
 
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
 
v
s
 
O
(
n
)
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
 
1
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
N
a
i
v
e
 
f
i
b
 
h
a
s
 
e
x
p
o
n
e
n
t
i
a
l
 
c
a
l
l
s
 
d
u
e
 
t
o
 
r
e
p
e
a
t
e
d
 
s
u
b
p
r
o
b
l
e
m
s
;
 
m
e
m
o
i
z
a
t
i
o
n
 
s
o
l
v
e
s
 
e
a
c
h
 
s
u
b
p
r
o
b
l
e
m
 
o
n
c
e
 
f
o
r
 
O
(
n
)
 
t
o
t
a
l
.
"
,


 
 
 
 
}
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
 
"
F
o
r
 
H
o
u
s
e
 
R
o
b
b
e
r
 
w
i
t
h
 
h
=
[
2
,
 
1
,
 
1
,
 
2
]
,
 
w
h
a
t
 
i
s
 
t
h
e
 
m
a
x
 
l
o
o
t
?
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
3
"
,
 
"
4
"
,
 
"
5
"
,
 
"
6
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
 
1
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
d
p
:
 
2
,
 
2
,
 
3
,
 
4
.
 
R
o
b
 
h
o
u
s
e
s
 
0
 
a
n
d
 
3
 
t
o
 
g
e
t
 
2
+
2
 
=
 
4
.
"
,


 
 
 
 
}
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
 
"
C
l
i
m
b
i
n
g
 
s
t
a
i
r
s
 
r
e
c
u
r
r
e
n
c
e
 
d
p
[
i
]
 
=
 
d
p
[
i
-
1
]
 
+
 
d
p
[
i
-
2
]
 
a
r
i
s
e
s
 
b
e
c
a
u
s
e
.
.
.
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
T
h
e
 
l
a
s
t
 
s
t
e
p
 
i
s
 
1
 
O
R
 
2
 
s
t
a
i
r
s
,
 
a
n
d
 
t
h
o
s
e
 
p
a
t
h
s
 
a
r
e
 
d
i
s
j
o
i
n
t
"
,


 
 
 
 
 
 
 
 
"
S
t
a
i
r
s
 
a
r
e
 
m
o
n
o
t
o
n
i
c
a
l
l
y
 
i
n
c
r
e
a
s
i
n
g
"
,


 
 
 
 
 
 
 
 
"
T
w
o
-
s
t
e
p
 
m
o
v
e
s
 
a
r
e
 
f
a
s
t
e
r
 
t
h
a
n
 
o
n
e
-
s
t
e
p
"
,


 
 
 
 
 
 
 
 
"
F
i
b
o
n
a
c
c
i
 
i
s
 
a
l
w
a
y
s
 
t
h
e
 
a
n
s
w
e
r
"
,


 
 
 
 
 
 
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
C
o
u
n
t
 
p
a
t
h
s
 
e
n
d
i
n
g
 
w
i
t
h
 
a
 
1
-
s
t
e
p
 
(
d
p
[
i
-
1
]
)
 
+
 
t
h
o
s
e
 
e
n
d
i
n
g
 
w
i
t
h
 
a
 
2
-
s
t
e
p
 
(
d
p
[
i
-
2
]
)
.
 
D
i
s
j
o
i
n
t
 
a
n
d
 
e
x
h
a
u
s
t
i
v
e
.
"
,


 
 
 
 
}
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
 
"
W
h
i
c
h
 
i
s
 
N
O
T
 
a
 
b
e
n
e
f
i
t
 
o
f
 
b
o
t
t
o
m
-
u
p
 
D
P
 
o
v
e
r
 
t
o
p
-
d
o
w
n
?
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
A
v
o
i
d
s
 
s
t
a
c
k
 
o
v
e
r
f
l
o
w
 
o
n
 
d
e
e
p
 
r
e
c
u
r
s
i
o
n
"
,


 
 
 
 
 
 
 
 
"
E
l
i
m
i
n
a
t
e
s
 
f
u
n
c
t
i
o
n
-
c
a
l
l
 
o
v
e
r
h
e
a
d
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
c
o
m
p
u
t
e
s
 
n
e
c
e
s
s
a
r
y
 
s
u
b
p
r
o
b
l
e
m
s
"
,


 
 
 
 
 
 
 
 
"
M
a
k
e
s
 
s
p
a
c
e
 
o
p
t
i
m
i
z
a
t
i
o
n
 
m
o
r
e
 
o
b
v
i
o
u
s
"
,


 
 
 
 
 
 
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
 
2
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
B
o
t
t
o
m
-
u
p
 
f
i
l
l
s
 
t
h
e
 
W
H
O
L
E
 
t
a
b
l
e
.
 
T
o
p
-
d
o
w
n
 
o
n
l
y
 
c
o
m
p
u
t
e
s
 
w
h
a
t
'
s
 
n
e
e
d
e
d
 
-
 
t
h
a
t
'
s
 
a
 
r
a
r
e
 
e
d
g
e
 
i
t
 
s
t
i
l
l
 
h
a
s
 
o
v
e
r
 
b
o
t
t
o
m
-
u
p
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
D
y
n
a
m
i
c
 
P
r
o
g
r
a
m
m
i
n
g
 
(
1
D
)
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
m
o
s
t
 
c
o
m
m
o
n
 
h
a
r
d
-
i
n
t
e
r
v
i
e
w
 
p
a
t
t
e
r
n
.
 
M
a
s
t
e
r
 
t
h
e
 
s
t
a
t
e
 
d
e
f
i
n
i
t
i
o
n
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
D
y
n
a
m
i
c
 
P
r
o
g
r
a
m
m
i
n
g
 
(
2
D
)
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


