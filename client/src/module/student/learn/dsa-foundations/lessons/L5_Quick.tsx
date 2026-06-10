
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
s
o
r
t
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




t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
c
o
m
p
a
r
e
"
 
|
 
"
s
w
a
p
"
 
|
 
"
s
o
r
t
e
d
"
 
|
 
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
p
i
v
o
t
"
 
|
 
"
v
i
s
i
t
e
d
"
 
|
 
"
d
o
n
e
"
 
|
 
"
l
o
w
"
 
|
 
"
h
i
g
h
"
 
|
 
"
m
i
d
"
;




t
y
p
e
 
P
i
v
o
t
S
t
r
a
t
e
g
y
 
=
 
"
l
a
s
t
"
 
|
 
"
f
i
r
s
t
"
 
|
 
"
r
a
n
d
o
m
"
 
|
 
"
m
e
d
i
a
n
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
 
A
r
r
a
y
B
a
r
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




c
o
n
s
t
 
S
T
A
T
E
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
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
,


 
 
c
o
m
p
a
r
e
:
 
"
#
0
6
b
6
d
4
"
,


 
 
s
w
a
p
:
 
"
#
f
5
9
e
0
b
"
,


 
 
s
o
r
t
e
d
:
 
"
#
a
3
e
6
3
5
"
,


 
 
a
c
t
i
v
e
:
 
"
#
8
1
8
c
f
8
"
,


 
 
p
i
v
o
t
:
 
"
#
f
9
7
3
1
6
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
d
6
d
3
d
1
"
,


 
 
d
o
n
e
:
 
"
#
a
3
e
6
3
5
"
,


 
 
l
o
w
:
 
"
#
6
0
a
5
f
a
"
,


 
 
h
i
g
h
:
 
"
#
f
8
7
1
7
1
"
,


 
 
m
i
d
:
 
"
#
f
b
9
2
3
c
"
,


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
 
A
r
r
a
y
B
a
r
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
h
e
i
g
h
t
 
=
 
1
6
0
,


}
:
 
{


 
 
v
a
l
u
e
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
;


 
 
s
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
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
;


}
)
 
{


 
 
c
o
n
s
t
 
m
a
x
 
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
v
a
l
u
e
s
,
 
1
)
;


 
 
c
o
n
s
t
 
b
a
r
W
 
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
2
4
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
4
8
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
4
8
0
 
/
 
(
v
a
l
u
e
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
 
1
)
)
)
)
;


 
 
c
o
n
s
t
 
g
a
p
 
=
 
4
;


 
 
c
o
n
s
t
 
t
o
t
a
l
W
 
=
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
 
-
 
g
a
p
;




 
 
c
o
n
s
t
 
p
t
r
B
y
I
d
x
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
 
s
t
r
i
n
g
[
]
>
 
=
 
{
}
;


 
 
i
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
n
a
m
e
,
 
i
d
x
]
 
o
f
 
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
p
o
i
n
t
e
r
s
)
)
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
r
B
y
I
d
x
[
i
d
x
]
)
 
p
t
r
B
y
I
d
x
[
i
d
x
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
r
B
y
I
d
x
[
i
d
x
]
.
p
u
s
h
(
n
a
m
e
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
"
>


 
 
 
 
 
 
<
d
i
v
 
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
 
t
o
t
a
l
W
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
h
e
i
g
h
t
:
 
h
e
i
g
h
t
 
+
 
3
2
 
}
}
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
t
o
t
a
l
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
h
e
i
g
h
t
 
+
 
3
2
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
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
 
b
a
r
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
4
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
(
v
 
/
 
m
a
x
)
 
*
 
(
h
e
i
g
h
t
 
-
 
8
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
i
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
h
e
i
g
h
t
 
-
 
b
a
r
H
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
e
 
=
 
(
s
t
a
t
e
s
?
.
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
)
 
a
s
 
C
e
l
l
S
t
a
t
e
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
S
T
A
T
E
_
C
O
L
O
R
S
[
s
t
a
t
e
]
 
?
?
 
S
T
A
T
E
_
C
O
L
O
R
S
.
d
e
f
a
u
l
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
s
 
=
 
p
t
r
B
y
I
d
x
[
i
]
 
?
?
 
[
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
g
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
b
a
r
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
b
a
r
H
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
3
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
a
l
l
 
0
.
2
5
s
 
e
a
s
e
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
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
1
2
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
1
1
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
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
M
u
t
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
s
.
m
a
p
(
(
p
,
 
p
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
2
6
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
9
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
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
7
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
 
&
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
v
a
l
u
e
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
;


 
 
s
t
a
t
e
s
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
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


 
 
h
i
g
h
l
i
g
h
t
K
e
y
?
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
 
P
S
E
U
D
O
 
=
 
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
 
q
u
i
c
k
S
o
r
t
(
A
,
 
l
o
,
 
h
i
)
:
"
,


 
 
"
 
 
i
f
 
l
o
 
>
=
 
h
i
:
 
r
e
t
u
r
n
"
,


 
 
"
 
 
p
 
<
-
 
p
a
r
t
i
t
i
o
n
(
A
,
 
l
o
,
 
h
i
)
"
,


 
 
"
 
 
q
u
i
c
k
S
o
r
t
(
A
,
 
l
o
,
 
p
-
1
)
"
,


 
 
"
 
 
q
u
i
c
k
S
o
r
t
(
A
,
 
p
+
1
,
 
h
i
)
"
,


 
 
"
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
 
p
a
r
t
i
t
i
o
n
(
A
,
 
l
o
,
 
h
i
)
:
 
 
/
/
 
L
o
m
u
t
o
"
,


 
 
"
 
 
p
i
v
o
t
 
<
-
 
A
[
h
i
]
"
,


 
 
"
 
 
i
 
<
-
 
l
o
 
-
 
1
"
,


 
 
"
 
 
f
o
r
 
j
 
f
r
o
m
 
l
o
 
t
o
 
h
i
-
1
:
"
,


 
 
"
 
 
 
 
i
f
 
A
[
j
]
 
<
=
 
p
i
v
o
t
:
"
,


 
 
"
 
 
 
 
 
 
i
 
<
-
 
i
 
+
 
1
;
 
s
w
a
p
(
A
[
i
]
,
 
A
[
j
]
)
"
,


 
 
"
 
 
s
w
a
p
(
A
[
i
+
1
]
,
 
A
[
h
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
 
i
 
+
 
1
"
,


]
;




f
u
n
c
t
i
o
n
 
p
i
c
k
P
i
v
o
t
I
n
d
e
x
(
a
r
r
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
 
l
o
:
 
n
u
m
b
e
r
,
 
h
i
:
 
n
u
m
b
e
r
,
 
s
t
r
a
t
:
 
P
i
v
o
t
S
t
r
a
t
e
g
y
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
s
t
r
a
t
 
=
=
=
 
"
l
a
s
t
"
)
 
r
e
t
u
r
n
 
h
i
;


 
 
i
f
 
(
s
t
r
a
t
 
=
=
=
 
"
f
i
r
s
t
"
)
 
r
e
t
u
r
n
 
l
o
;


 
 
i
f
 
(
s
t
r
a
t
 
=
=
=
 
"
r
a
n
d
o
m
"
)
 
r
e
t
u
r
n
 
l
o
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
(
h
i
 
-
 
l
o
 
+
 
1
)
)
;


 
 
c
o
n
s
t
 
m
i
d
 
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
(
l
o
 
+
 
h
i
)
 
/
 
2
)
;


 
 
c
o
n
s
t
 
t
r
i
o
 
=
 
[
[
l
o
,
 
a
r
r
[
l
o
]
]
,
 
[
m
i
d
,
 
a
r
r
[
m
i
d
]
]
,
 
[
h
i
,
 
a
r
r
[
h
i
]
]
]
 
a
s
 
c
o
n
s
t
;


 
 
c
o
n
s
t
 
s
o
r
t
e
d
 
=
 
[
.
.
.
t
r
i
o
]
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
 
a
[
1
]
 
-
 
b
[
1
]
)
;


 
 
r
e
t
u
r
n
 
s
o
r
t
e
d
[
1
]
[
0
]
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
 
b
u
i
l
d
F
r
a
m
e
s
(
i
n
p
u
t
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
 
s
t
r
a
t
e
g
y
:
 
P
i
v
o
t
S
t
r
a
t
e
g
y
)
:
 
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
 
a
r
r
 
=
 
[
.
.
.
i
n
p
u
t
]
;


 
 
c
o
n
s
t
 
n
 
=
 
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


 
 
l
e
t
 
c
o
m
p
a
r
i
s
o
n
s
 
=
 
0
;


 
 
l
e
t
 
s
w
a
p
s
 
=
 
0
;


 
 
c
o
n
s
t
 
f
i
n
a
l
i
z
e
d
 
=
 
n
e
w
 
S
e
t
<
n
u
m
b
e
r
>
(
)
;




 
 
c
o
n
s
t
 
b
a
s
e
S
t
a
t
e
s
 
=
 
(


 
 
 
 
l
o
:
 
n
u
m
b
e
r
,


 
 
 
 
h
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
 
{
 
p
i
v
o
t
?
:
 
n
u
m
b
e
r
;
 
i
?
:
 
n
u
m
b
e
r
;
 
j
?
:
 
n
u
m
b
e
r
;
 
s
w
a
p
?
:
 
[
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
]
 
}
,


 
 
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
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
a
r
r
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
f
i
n
a
l
i
z
e
d
.
h
a
s
(
k
)
)
 
r
e
t
u
r
n
 
"
s
o
r
t
e
d
"
;


 
 
 
 
 
 
i
f
 
(
k
 
<
 
l
o
 
|
|
 
k
 
>
 
h
i
)
 
r
e
t
u
r
n
 
"
v
i
s
i
t
e
d
"
;


 
 
 
 
 
 
r
e
t
u
r
n
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
}
)
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
p
i
v
o
t
 
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
 
s
t
[
e
x
t
r
a
.
p
i
v
o
t
]
 
=
 
"
p
i
v
o
t
"
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
i
 
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
 
e
x
t
r
a
.
i
 
>
=
 
0
)
 
s
t
[
e
x
t
r
a
.
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
j
 
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
 
s
t
[
e
x
t
r
a
.
j
]
 
=
 
"
c
o
m
p
a
r
e
"
;


 
 
 
 
i
f
 
(
e
x
t
r
a
?
.
s
w
a
p
)
 
{


 
 
 
 
 
 
s
t
[
e
x
t
r
a
.
s
w
a
p
[
0
]
]
 
=
 
"
s
w
a
p
"
;


 
 
 
 
 
 
s
t
[
e
x
t
r
a
.
s
w
a
p
[
1
]
]
 
=
 
"
s
w
a
p
"
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
s
t
;


 
 
}
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
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
r
s
:
 
{
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
S
t
a
r
t
i
n
g
 
q
u
i
c
k
 
s
o
r
t
 
o
n
 
[
$
{
a
r
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
]
 
w
i
t
h
 
p
i
v
o
t
 
=
 
$
{
s
t
r
a
t
e
g
y
}
`
,


 
 
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
 
s
o
r
t
(
l
o
:
 
n
u
m
b
e
r
,
 
h
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
 
l
o
,
 
h
i
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
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
q
u
i
c
k
S
o
r
t
(
A
,
 
$
{
l
o
}
,
 
$
{
h
i
}
)
`
,


 
 
 
 
}
)
;




 
 
 
 
i
f
 
(
l
o
 
>
=
 
h
i
)
 
{


 
 
 
 
 
 
i
f
 
(
l
o
 
=
=
=
 
h
i
)
 
f
i
n
a
l
i
z
e
d
.
a
d
d
(
l
o
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
 
l
o
,
 
h
i
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
)
,
 
p
o
i
n
t
e
r
s
:
 
{
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
 
l
o
 
>
=
 
h
i
 
-
 
s
u
b
-
a
r
r
a
y
 
o
f
 
s
i
z
e
 
<
=
 
1
 
i
s
 
s
o
r
t
e
d
.
`
,


 
 
 
 
 
 
}
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




 
 
 
 
c
o
n
s
t
 
p
i
v
o
t
I
d
x
 
=
 
p
i
c
k
P
i
v
o
t
I
n
d
e
x
(
a
r
r
,
 
l
o
,
 
h
i
,
 
s
t
r
a
t
e
g
y
)
;


 
 
 
 
i
f
 
(
p
i
v
o
t
I
d
x
 
!
=
=
 
h
i
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
 
2
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
I
d
x
,
 
"
A
[
p
i
v
o
t
I
d
x
]
"
:
 
a
r
r
[
p
i
v
o
t
I
d
x
]
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
p
i
v
o
t
I
d
x
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
:
 
p
i
v
o
t
I
d
x
 
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
h
o
s
e
n
 
p
i
v
o
t
 
(
$
{
s
t
r
a
t
e
g
y
}
)
 
i
s
 
A
[
$
{
p
i
v
o
t
I
d
x
}
]
 
=
 
$
{
a
r
r
[
p
i
v
o
t
I
d
x
]
}
.
 
M
o
v
e
 
i
t
 
t
o
 
t
h
e
 
e
n
d
.
`
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
[
a
r
r
[
p
i
v
o
t
I
d
x
]
,
 
a
r
r
[
h
i
]
]
 
=
 
[
a
r
r
[
h
i
]
,
 
a
r
r
[
p
i
v
o
t
I
d
x
]
]
;


 
 
 
 
 
 
s
w
a
p
s
+
+
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
 
l
o
,
 
h
i
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
:
 
h
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
P
i
v
o
t
 
m
o
v
e
d
 
t
o
 
i
n
d
e
x
 
$
{
h
i
}
.
`
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}




 
 
 
 
c
o
n
s
t
 
p
i
v
o
t
 
=
 
a
r
r
[
h
i
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
 
7
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
:
 
h
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
p
i
v
o
t
 
=
 
A
[
$
{
h
i
}
]
 
=
 
$
{
p
i
v
o
t
}
`
,


 
 
 
 
}
)
;




 
 
 
 
l
e
t
 
i
 
=
 
l
o
 
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
 
8
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
,
 
i
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
:
 
h
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
 
i
 
=
 
l
o
 
-
 
1
 
=
 
$
{
i
}
.
 
i
 
t
r
a
c
k
s
 
t
h
e
 
b
o
u
n
d
a
r
y
 
o
f
 
t
h
e
 
<
=
p
i
v
o
t
 
r
e
g
i
o
n
.
`
,


 
 
 
 
}
)
;




 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
l
o
;
 
j
 
<
 
h
i
;
 
j
+
+
)
 
{


 
 
 
 
 
 
c
o
m
p
a
r
i
s
o
n
s
+
+
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
0
,


 
 
 
 
 
 
 
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
,
 
i
,
 
j
,
 
"
A
[
j
]
"
:
 
a
r
r
[
j
]
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,


 
 
 
 
 
 
 
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
,
 
i
:
 
i
 
>
=
 
l
o
 
?
 
i
 
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
,
 
j
 
}
)
,


 
 
 
 
 
 
 
 
p
o
i
n
t
e
r
s
:
 
{
 
i
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
i
,
 
l
o
)
,
 
j
,
 
p
i
v
o
t
:
 
h
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
a
r
e
 
A
[
$
{
j
}
]
 
=
 
$
{
a
r
r
[
j
]
}
 
w
i
t
h
 
p
i
v
o
t
 
=
 
$
{
p
i
v
o
t
}
`
,


 
 
 
 
 
 
}
)
;




 
 
 
 
 
 
i
f
 
(
a
r
r
[
j
]
 
<
=
 
p
i
v
o
t
)
 
{


 
 
 
 
 
 
 
 
i
+
+
;


 
 
 
 
 
 
 
 
i
f
 
(
i
 
!
=
=
 
j
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
1
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
,
 
i
,
 
j
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
,
 
s
w
a
p
:
 
[
i
,
 
j
]
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
,
 
p
i
v
o
t
:
 
h
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
A
[
$
{
j
}
]
 
<
=
 
p
i
v
o
t
 
-
 
e
x
p
a
n
d
 
t
h
e
 
<
=
 
r
e
g
i
o
n
.
 
S
w
a
p
 
A
[
$
{
i
}
]
 
w
i
t
h
 
A
[
$
{
j
}
]
.
`
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
[
a
r
r
[
i
]
,
 
a
r
r
[
j
]
]
 
=
 
[
a
r
r
[
j
]
,
 
a
r
r
[
i
]
]
;


 
 
 
 
 
 
 
 
 
 
s
w
a
p
s
+
+
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
1
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
,
 
i
,
 
j
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
,
 
i
,
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
,
 
p
i
v
o
t
:
 
h
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
A
f
t
e
r
 
s
w
a
p
:
 
w
i
n
d
o
w
 
i
s
 
[
$
{
a
r
r
.
s
l
i
c
e
(
l
o
,
 
h
i
 
+
 
1
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
]
`
,


 
 
 
 
 
 
 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
s
w
a
p
s
"
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
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
1
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
,
 
i
,
 
j
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
,
 
i
,
 
j
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
,
 
p
i
v
o
t
:
 
h
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
A
[
$
{
j
}
]
 
<
=
 
p
i
v
o
t
 
-
 
i
 
=
 
j
,
 
n
o
 
s
w
a
p
 
n
e
e
d
e
d
.
 
A
d
v
a
n
c
e
 
i
.
`
,


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}


 
 
 
 
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
 
1
2
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
i
v
o
t
,
 
i
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
h
i
,
 
s
w
a
p
:
 
[
i
 
+
 
1
,
 
h
i
]
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
p
i
v
o
t
:
 
h
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
P
l
a
c
e
 
p
i
v
o
t
:
 
s
w
a
p
 
A
[
$
{
i
 
+
 
1
}
]
 
w
i
t
h
 
A
[
$
{
h
i
}
]
 
(
p
i
v
o
t
)
`
,


 
 
 
 
}
)
;


 
 
 
 
[
a
r
r
[
i
 
+
 
1
]
,
 
a
r
r
[
h
i
]
]
 
=
 
[
a
r
r
[
h
i
]
,
 
a
r
r
[
i
 
+
 
1
]
]
;


 
 
 
 
s
w
a
p
s
+
+
;


 
 
 
 
c
o
n
s
t
 
p
 
=
 
i
 
+
 
1
;


 
 
 
 
f
i
n
a
l
i
z
e
d
.
a
d
d
(
p
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
3
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
h
i
,
 
{
 
p
i
v
o
t
:
 
p
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
p
 
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
P
i
v
o
t
 
$
{
a
r
r
[
p
]
}
 
i
s
 
n
o
w
 
a
t
 
i
t
s
 
f
i
n
a
l
 
p
o
s
i
t
i
o
n
 
$
{
p
}
.
 
R
e
c
u
r
s
e
 
o
n
 
[
$
{
l
o
}
.
.
$
{
p
 
-
 
1
}
]
 
a
n
d
 
[
$
{
p
 
+
 
1
}
.
.
$
{
h
i
}
]
.
`
,


 
 
 
 
 
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
s
w
a
p
s
"
,


 
 
 
 
}
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
 
3
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
l
o
,
 
p
 
-
 
1
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
:
 
p
 
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
L
e
f
t
 
r
e
c
u
r
s
i
o
n
:
 
q
u
i
c
k
S
o
r
t
(
A
,
 
$
{
l
o
}
,
 
$
{
p
 
-
 
1
}
)
`
,


 
 
 
 
}
)
;


 
 
 
 
s
o
r
t
(
l
o
,
 
p
 
-
 
1
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
 
4
,
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
p
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
b
a
s
e
S
t
a
t
e
s
(
p
 
+
 
1
,
 
h
i
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
:
 
p
 
+
 
1
,
 
h
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
R
i
g
h
t
 
r
e
c
u
r
s
i
o
n
:
 
q
u
i
c
k
S
o
r
t
(
A
,
 
$
{
p
 
+
 
1
}
,
 
$
{
h
i
}
)
`
,


 
 
 
 
}
)
;


 
 
 
 
s
o
r
t
(
p
 
+
 
1
,
 
h
i
)
;


 
 
}




 
 
i
f
 
(
n
 
>
 
0
)
 
s
o
r
t
(
0
,
 
n
 
-
 
1
)
;




 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
n
;
 
k
+
+
)
 
f
i
n
a
l
i
z
e
d
.
a
d
d
(
k
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
 
n
,
 
c
o
m
p
a
r
i
s
o
n
s
,
 
s
w
a
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
a
r
r
]
,


 
 
 
 
s
t
a
t
e
s
:
 
a
r
r
.
m
a
p
(
(
)
 
=
>
 
"
s
o
r
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
r
s
:
 
{
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
 
S
o
r
t
e
d
:
 
[
$
{
a
r
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
]
.
 
$
{
c
o
m
p
a
r
i
s
o
n
s
}
 
c
o
m
p
a
r
i
s
o
n
s
,
 
$
{
s
w
a
p
s
}
 
s
w
a
p
s
.
`
,


 
 
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




f
u
n
c
t
i
o
n
 
p
a
r
s
e
A
r
r
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
l
l
 
{


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
s
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
 
N
u
m
b
e
r
(
x
.
t
r
i
m
(
)
)
)
;


 
 
i
f
 
(
n
u
m
s
.
s
o
m
e
(
(
n
)
 
=
>
 
N
u
m
b
e
r
.
i
s
N
a
N
(
n
)
)
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


 
 
i
f
 
(
n
u
m
s
.
l
e
n
g
t
h
 
<
 
2
 
|
|
 
n
u
m
s
.
l
e
n
g
t
h
 
>
 
1
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


 
 
r
e
t
u
r
n
 
n
u
m
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
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
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
(
"
7
,
 
2
,
 
1
,
 
8
,
 
6
,
 
3
,
 
5
,
 
4
"
)
;


 
 
c
o
n
s
t
 
[
s
t
r
a
t
e
g
y
,
 
s
e
t
S
t
r
a
t
e
g
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
i
v
o
t
S
t
r
a
t
e
g
y
>
(
"
l
a
s
t
"
)
;




 
 
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
 
p
a
r
s
e
A
r
r
(
i
n
p
u
t
S
t
r
)
 
?
?
 
[
7
,
 
2
,
 
1
,
 
8
,
 
6
,
 
3
,
 
5
,
 
4
]
,
 
[
i
n
p
u
t
S
t
r
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
 
b
u
i
l
d
F
r
a
m
e
s
(
p
a
r
s
e
d
,
 
s
t
r
a
t
e
g
y
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
 
s
t
r
a
t
e
g
y
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


 
 
 
 
 
 
 
 
 
 
P
i
v
o
t
 
s
t
r
a
t
e
g
y
:


 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
t
r
a
t
e
g
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
e
)
 
=
>
 
s
e
t
S
t
r
a
t
e
g
y
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
 
a
s
 
P
i
v
o
t
S
t
r
a
t
e
g
y
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
s
t
o
n
e
-
2
0
0
 
t
e
x
t
-
s
m
 
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
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
l
a
s
t
"
>
L
a
s
t
 
e
l
e
m
e
n
t
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
f
i
r
s
t
"
>
F
i
r
s
t
 
e
l
e
m
e
n
t
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
r
a
n
d
o
m
"
>
R
a
n
d
o
m
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
m
e
d
i
a
n
"
>
M
e
d
i
a
n
 
o
f
 
t
h
r
e
e
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
{
s
t
r
a
t
e
g
y
 
=
=
=
 
"
f
i
r
s
t
"
 
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
o
s
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
r
o
s
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
e
d
i
u
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
W
o
r
s
t
 
c
a
s
e
 
o
n
 
s
o
r
t
e
d
 
i
n
p
u
t
!


 
 
 
 
 
 
 
 
 
 
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
"
Q
u
i
c
k
 
S
o
r
t
 
(
L
o
m
u
t
o
 
p
a
r
t
i
t
i
o
n
)
"


 
 
 
 
 
 
 
 
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
A
r
r
a
y
 
(
2
-
1
0
 
n
u
m
b
e
r
s
)
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
S
t
r
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
 
7
,
 
2
,
 
1
,
 
8
,
 
6
,
 
3
,
 
5
,
 
4
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
T
r
y
 
'
s
o
r
t
e
d
'
 
w
i
t
h
 
p
i
v
o
t
=
f
i
r
s
t
 
t
o
 
s
e
e
 
O
(
n
²
)
 
w
o
r
s
t
 
c
a
s
e
.
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
R
a
n
d
o
m
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
,
 
2
,
 
1
,
 
8
,
 
6
,
 
3
,
 
5
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
W
o
r
s
t
 
(
s
o
r
t
e
d
)
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
 
4
,
 
5
,
 
6
,
 
7
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
R
e
v
e
r
s
e
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
,
 
6
,
 
5
,
 
4
,
 
3
,
 
2
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
D
u
p
l
i
c
a
t
e
s
"
,
 
v
a
l
u
e
:
 
"
4
,
 
2
,
 
4
,
 
1
,
 
4
,
 
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
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
(
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
s
e
A
r
r
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
n
 
=
 
5
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
4
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
r
r
 
=
 
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
 
}
,
 
(
)
 
=
>
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
2
0
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
a
r
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
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
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
P
S
E
U
D
O
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
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
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
4
"
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
a
y
B
a
r
s


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
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
l
u
e
s
 
?
?
 
p
a
r
s
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
t
e
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
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
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
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
1
8
0
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
 
c
l
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
"
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
 
s
t
e
p
 
t
h
r
o
u
g
h
 
t
h
e
 
a
l
g
o
r
i
t
h
m
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
 
 
L
e
a
r
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
 
p
r
o
p
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
I
n
-
p
l
a
c
e
"
,
 
b
:
 
"
O
n
l
y
 
O
(
l
o
g
 
n
)
 
e
x
t
r
a
 
s
p
a
c
e
 
f
o
r
 
r
e
c
u
r
s
i
o
n
;
 
n
o
 
a
u
x
i
l
i
a
r
y
 
a
r
r
a
y
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
A
v
e
r
a
g
e
 
O
(
n
 
l
o
g
 
n
)
"
,
 
b
:
 
"
E
a
c
h
 
p
a
r
t
i
t
i
o
n
 
t
a
k
e
s
 
O
(
n
)
.
 
B
a
l
a
n
c
e
d
 
s
p
l
i
t
s
 
g
i
v
e
 
l
o
g
 
n
 
l
e
v
e
l
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
o
r
s
t
 
O
(
n
²
)
"
,
 
b
:
 
"
A
l
w
a
y
s
 
p
i
c
k
i
n
g
 
s
m
a
l
l
e
s
t
/
l
a
r
g
e
s
t
 
e
l
e
m
e
n
t
 
a
s
 
p
i
v
o
t
 
(
e
.
g
.
,
 
f
i
r
s
t
 
p
i
v
o
t
 
o
n
 
s
o
r
t
e
d
 
i
n
p
u
t
)
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
N
o
t
 
s
t
a
b
l
e
"
,
 
b
:
 
"
L
o
n
g
-
d
i
s
t
a
n
c
e
 
s
w
a
p
s
 
d
u
r
i
n
g
 
p
a
r
t
i
t
i
o
n
 
c
a
n
 
r
e
o
r
d
e
r
 
e
q
u
a
l
 
e
l
e
m
e
n
t
s
.
"
 
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
P
a
r
t
i
t
i
o
n
 
f
i
r
s
t
,
 
t
h
e
n
 
r
e
c
u
r
s
e
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
O
n
e
 
s
w
a
p
-
h
e
a
v
y
 
p
a
s
s
 
a
n
d
 
t
h
e
 
p
i
v
o
t
 
l
a
n
d
s
 
h
o
m
e
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


 
 
 
 
 
 
 
 
 
 
I
m
a
g
i
n
e
 
s
o
r
t
i
n
g
 
a
 
h
a
n
d
 
o
f
 
c
a
r
d
s
 
b
y
 
p
i
c
k
i
n
g
 
o
n
e
 
c
a
r
d
 
(
t
h
e
 
p
i
v
o
t
)
,
 
p
l
a
c
i
n
g
 
e
v
e
r
y
 
s
m
a
l
l
e
r


 
 
 
 
 
 
 
 
 
 
c
a
r
d
 
t
o
 
i
t
s
 
l
e
f
t
 
a
n
d
 
e
v
e
r
y
 
l
a
r
g
e
r
 
c
a
r
d
 
t
o
 
i
t
s
 
r
i
g
h
t
,
 
t
h
e
n
 
s
o
r
t
i
n
g
 
e
a
c
h
 
p
i
l
e
 
t
h
e
 
s
a
m
e
 
w
a
y
.


 
 
 
 
 
 
 
 
 
 
P
i
c
k
 
a
 
p
i
v
o
t
.
 
R
e
a
r
r
a
n
g
e
 
t
h
e
 
a
r
r
a
y
 
s
o
 
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
 
&
l
e
;
 
p
i
v
o
t
 
i
s
 
o
n
 
t
h
e
 
l
e
f
t
,
 
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


 
 
 
 
 
 
 
 
 
 
&
g
t
;
 
p
i
v
o
t
 
o
n
 
t
h
e
 
r
i
g
h
t
.
 
T
h
e
 
p
i
v
o
t
 
l
a
n
d
s
 
a
t
 
i
t
s
 
c
o
r
r
e
c
t
 
f
i
n
a
l
 
p
o
s
i
t
i
o
n
.
 
R
e
c
u
r
s
e
 
o
n
 
e
a
c
h


 
 
 
 
 
 
 
 
 
 
s
i
d
e
.
 
N
o
 
m
e
r
g
e
 
s
t
e
p
 
n
e
e
d
e
d
;
 
t
h
e
 
w
o
r
k
 
h
a
p
p
e
n
s
 
d
u
r
i
n
g
 
p
a
r
t
i
t
i
o
n
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
3
"
>


 
 
 
 
 
 
 
 
{
p
r
o
p
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
 
m
b
-
1
 
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
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
P
i
v
o
t
 
m
a
t
t
e
r
s
.
<
/
s
t
r
o
n
g
>
 
R
a
n
d
o
m
 
o
r
 
m
e
d
i
a
n
-
o
f
-
t
h
r
e
e
 
p
i
v
o
t
s
 
d
o
d
g
e
 
t
h
e
 
w
o
r
s
t
-
c
a
s
e


 
 
 
 
 
 
 
 
p
a
t
h
o
l
o
g
i
c
a
l
 
i
n
p
u
t
.
 
T
h
i
s
 
i
s
 
w
h
y
 
p
r
o
d
u
c
t
i
o
n
 
q
u
i
c
k
s
o
r
t
s
 
(
i
n
t
r
o
s
o
r
t
,
 
p
d
q
s
o
r
t
)
 
a
l
w
a
y
s
 
r
a
n
d
o
m
i
z
e
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
 
I
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
L
o
m
u
t
o
 
p
a
r
t
i
t
i
o
n
 
o
n
 
[
2
,
 
8
,
 
7
,
 
1
,
 
3
,
 
5
,
 
6
,
 
4
]
 
w
i
t
h
 
p
i
v
o
t
 
=
 
4
 
(
l
a
s
t
)
:
 
f
i
n
a
l
 
p
i
v
o
t
 
i
n
d
e
x
?
"
,
 
a
n
s
w
e
r
:
 
"
3
"
 
}
,


 
 
 
 
{
 
q
:
 
"
Q
u
i
c
k
s
o
r
t
 
o
n
 
s
o
r
t
e
d
 
[
1
,
2
,
3
,
4
,
5
]
 
w
i
t
h
 
p
i
v
o
t
=
f
i
r
s
t
:
 
t
o
t
a
l
 
c
o
m
p
a
r
i
s
o
n
s
?
"
,
 
a
n
s
w
e
r
:
 
"
1
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
n
 
=
 
8
,
 
b
a
l
a
n
c
e
d
 
p
i
v
o
t
s
 
e
v
e
r
y
 
t
i
m
e
:
 
r
e
c
u
r
s
i
o
n
 
d
e
p
t
h
?
"
,
 
a
n
s
w
e
r
:
 
"
3
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


 
 
 
 
 
 
 
 
C
l
a
s
s
i
c
 
t
r
a
c
e
 
p
r
a
c
t
i
c
e
.
 
W
o
r
s
t
 
c
a
s
e
 
c
o
m
p
a
r
i
s
o
n
s
 
=
 
n
(
n
-
1
)
/
2
.
 
B
a
l
a
n
c
e
d
 
d
e
p
t
h
 
=
 
c
e
i
l
(
l
o
g
2
 
n
)
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
n
s
w
e
r
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
5
0
0
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
t
e
x
t
-
s
m
 
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
5
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
5
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
?
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
m
e
d
i
u
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
5
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
3
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
4
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
r
o
s
e
-
3
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
C
o
r
r
e
c
t
 
-
 
$
{
p
.
a
n
s
w
e
r
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
n
s
w
e
r
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
L
o
m
u
t
o
 
v
s
 
H
o
a
r
e
 
p
a
r
t
i
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


 
 
 
 
 
 
 
 
 
 
L
o
m
u
t
o
 
(
u
s
e
d
 
h
e
r
e
)
:
 
s
i
m
p
l
e
,
 
o
n
e
 
i
-
p
o
i
n
t
e
r
,
 
e
a
s
i
e
r
 
t
o
 
t
e
a
c
h
.
 
H
o
a
r
e
:
 
t
w
o
 
p
o
i
n
t
e
r
s
 
m
o
v
i
n
g


 
 
 
 
 
 
 
 
 
 
i
n
w
a
r
d
,
 
f
e
w
e
r
 
s
w
a
p
s
 
o
n
 
a
v
e
r
a
g
e
,
 
b
u
t
 
t
h
e
 
p
i
v
o
t
 
d
o
e
s
 
n
o
t
 
a
l
w
a
y
s
 
e
n
d
 
a
t
 
i
t
s
 
f
i
n
a
l
 
i
n
d
e
x
.
 
M
o
s
t


 
 
 
 
 
 
 
 
 
 
t
e
x
t
b
o
o
k
s
 
t
e
a
c
h
 
L
o
m
u
t
o
;
 
p
r
o
d
u
c
t
i
o
n
 
c
o
d
e
 
u
s
e
s
 
H
o
a
r
e
 
o
r
 
d
u
a
l
-
p
i
v
o
t
 
v
a
r
i
a
n
t
s
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
W
h
y
 
r
a
n
d
o
m
i
z
e
 
t
h
e
 
p
i
v
o
t
?
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


 
 
 
 
 
 
 
 
 
 
A
n
 
a
d
v
e
r
s
a
r
y
 
c
a
n
 
c
r
a
f
t
 
i
n
p
u
t
 
t
h
a
t
 
m
a
k
e
s
 
y
o
u
r
 
p
i
v
o
t
 
a
l
w
a
y
s
 
t
h
e
 
s
m
a
l
l
e
s
t
 
e
l
e
m
e
n
t
,
 
g
i
v
i
n
g


 
 
 
 
 
 
 
 
 
 
O
(
n
²
)
.
 
R
a
n
d
o
m
i
z
i
n
g
 
m
a
k
e
s
 
t
h
e
 
e
x
p
e
c
t
e
d
 
r
u
n
n
i
n
g
 
t
i
m
e
 
T
h
e
t
a
(
n
 
l
o
g
 
n
)
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
i
n
p
u
t
.


 
 
 
 
 
 
 
 
 
 
E
x
p
e
c
t
e
d
 
m
e
a
n
s
 
w
i
t
h
 
h
i
g
h
 
p
r
o
b
a
b
i
l
i
t
y
,
 
n
o
t
 
b
e
s
t
-
c
a
s
e
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
I
n
t
e
r
v
i
e
w
 
h
o
o
k
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
o
r
s
t
-
c
a
s
e
 
c
o
m
p
a
r
i
s
o
n
s
:
 
n
(
n
-
1
)
/
2
.
 
B
e
s
t
-
c
a
s
e
:
 
T
h
e
t
a
(
n
 
l
o
g
 
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
S
p
a
c
e
:
 
T
h
e
t
a
(
l
o
g
 
n
)
 
e
x
p
e
c
t
e
d
 
r
e
c
u
r
s
i
o
n
 
s
t
a
c
k
;
 
T
h
e
t
a
(
n
)
 
w
o
r
s
t
 
c
a
s
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


 
 
 
 
 
 
 
 
 
 
 
 
I
n
t
r
o
s
o
r
t
 
=
 
q
u
i
c
k
s
o
r
t
 
+
 
f
a
l
l
b
a
c
k
 
t
o
 
h
e
a
p
s
o
r
t
 
w
h
e
n
 
r
e
c
u
r
s
i
o
n
 
d
e
p
t
h
 
e
x
c
e
e
d
s
 
2
 
l
o
g
2
 
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
5
_
Q
u
i
c
k
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
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
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
 
w
o
r
s
t
-
c
a
s
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
 
q
u
i
c
k
s
o
r
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
O
(
n
 
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
²
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
l
o
g
 
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
W
h
e
n
 
e
v
e
r
y
 
p
a
r
t
i
t
i
o
n
 
i
s
 
m
a
x
i
m
a
l
l
y
 
u
n
b
a
l
a
n
c
e
d
 
(
e
.
g
.
,
 
a
l
w
a
y
s
 
p
i
c
k
i
n
g
 
s
m
a
l
l
e
s
t
/
l
a
r
g
e
s
t
 
a
s
 
p
i
v
o
t
)
,
 
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
 
i
s
 
n
 
l
e
v
e
l
s
 
d
e
e
p
,
 
g
i
v
i
n
g
 
T
h
e
t
a
(
n
²
)
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
I
n
 
L
o
m
u
t
o
 
p
a
r
t
i
t
i
o
n
 
o
f
 
[
3
,
 
5
,
 
2
,
 
1
,
 
4
]
 
w
i
t
h
 
p
i
v
o
t
 
=
 
4
 
(
l
a
s
t
)
,
 
t
h
e
 
p
i
v
o
t
 
e
n
d
s
 
u
p
 
a
t
 
i
n
d
e
x
:
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
2
"
,
 
"
3
"
,
 
"
4
"
,
 
"
1
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
S
c
a
n
 
j
=
0
.
.
3
.
 
A
[
j
]
 
<
=
 
4
 
f
o
r
 
3
,
 
2
,
 
1
;
 
t
h
r
e
e
 
e
l
e
m
e
n
t
s
 
l
a
n
d
 
o
n
 
t
h
e
 
l
e
f
t
.
 
P
i
v
o
t
 
l
a
n
d
s
 
a
t
 
i
n
d
e
x
 
3
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
 
p
i
v
o
t
 
c
h
o
i
c
e
 
g
i
v
e
s
 
O
(
n
²
)
 
o
n
 
a
l
r
e
a
d
y
-
s
o
r
t
e
d
 
i
n
p
u
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
L
a
s
t
 
e
l
e
m
e
n
t
"
,
 
"
R
a
n
d
o
m
"
,
 
"
M
e
d
i
a
n
 
o
f
 
t
h
r
e
e
"
,
 
"
M
i
d
d
l
e
 
e
l
e
m
e
n
t
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
W
i
t
h
 
p
i
v
o
t
 
=
 
l
a
s
t
 
(
l
a
r
g
e
s
t
 
o
n
 
s
o
r
t
e
d
 
i
n
p
u
t
)
,
 
e
v
e
r
y
 
p
a
r
t
i
t
i
o
n
 
p
r
o
d
u
c
e
s
 
[
n
-
1
 
|
 
0
]
 
s
p
l
i
t
:
 
t
h
e
 
w
o
r
s
t
 
c
a
s
e
.
 
S
a
m
e
 
h
a
p
p
e
n
s
 
w
i
t
h
 
p
i
v
o
t
=
f
i
r
s
t
 
o
n
 
s
o
r
t
e
d
 
a
s
c
e
n
d
i
n
g
 
i
n
p
u
t
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
S
p
a
c
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
 
q
u
i
c
k
s
o
r
t
 
i
n
 
t
h
e
 
a
v
e
r
a
g
e
 
c
a
s
e
 
(
a
u
x
i
l
i
a
r
y
)
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
1
)
"
,
 
"
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
Q
u
i
c
k
s
o
r
t
 
i
s
 
i
n
-
p
l
a
c
e
 
b
u
t
 
u
s
e
s
 
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
 
s
t
a
c
k
.
 
B
a
l
a
n
c
e
d
 
p
a
r
t
i
t
i
o
n
s
 
g
i
v
e
 
T
h
e
t
a
(
l
o
g
 
n
)
 
s
t
a
c
k
 
d
e
p
t
h
.
 
W
o
r
s
t
 
c
a
s
e
:
 
T
h
e
t
a
(
n
)
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
Q
u
i
c
k
 
S
o
r
t
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
E
x
t
r
e
m
e
l
y
 
c
o
m
m
o
n
:
 
p
a
r
t
i
t
i
o
n
 
l
o
g
i
c
 
p
o
w
e
r
s
 
k
t
h
-
l
a
r
g
e
s
t
,
 
D
u
t
c
h
 
f
l
a
g
,
 
e
t
c
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
N
o
n
-
C
o
m
p
a
r
i
s
o
n
 
S
o
r
t
s
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


