
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
 
F
i
l
e
T
e
x
t
,
 
L
o
a
d
e
r
2
,
 
T
r
a
s
h
2
,
 
U
p
l
o
a
d
 
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




c
o
n
s
t
 
M
A
X
_
R
E
S
U
M
E
S
 
=
 
2
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
e
t
F
i
l
e
N
a
m
e
F
r
o
m
U
r
l
(
u
r
l
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
t
r
y
 
{


 
 
 
 
c
o
n
s
t
 
p
a
t
h
n
a
m
e
 
=
 
n
e
w
 
U
R
L
(
u
r
l
)
.
p
a
t
h
n
a
m
e
;


 
 
 
 
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
 
p
a
t
h
n
a
m
e
.
s
p
l
i
t
(
"
/
"
)
;


 
 
 
 
c
o
n
s
t
 
f
u
l
l
 
=
 
d
e
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
p
a
r
t
s
[
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
 
-
 
1
]
 
?
?
 
"
r
e
s
u
m
e
.
p
d
f
"
)
;


 
 
 
 
c
o
n
s
t
 
m
a
t
c
h
 
=
 
f
u
l
l
.
m
a
t
c
h
(
/
^
(
.
+
)
-
\
d
+
-
\
d
+
(
\
.
\
w
+
)
$
/
)
;


 
 
 
 
r
e
t
u
r
n
 
m
a
t
c
h
 
?
 
`
$
{
m
a
t
c
h
[
1
]
}
$
{
m
a
t
c
h
[
2
]
}
`
 
:
 
f
u
l
l
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
"
r
e
s
u
m
e
.
p
d
f
"
;


 
 
}


}




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
s
u
m
e
s
S
e
c
t
i
o
n
P
r
o
p
s
 
{


 
 
r
e
s
u
m
e
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
R
e
s
u
m
e
:
 
b
o
o
l
e
a
n
;


 
 
d
e
l
e
t
i
n
g
R
e
s
u
m
e
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
;


 
 
o
n
U
p
l
o
a
d
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
D
e
l
e
t
e
:
 
(
u
r
l
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
 
R
e
s
u
m
e
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


 
 
r
e
s
u
m
e
s
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
R
e
s
u
m
e
,


 
 
d
e
l
e
t
i
n
g
R
e
s
u
m
e
,


 
 
o
n
U
p
l
o
a
d
,


 
 
o
n
D
e
l
e
t
e
,


}
:
 
R
e
s
u
m
e
s
S
e
c
t
i
o
n
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
 
r
e
s
u
m
e
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
r
e
s
u
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
r
e
s
u
m
e
s
.
m
a
p
(
(
u
r
l
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
u
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
F
i
l
e
T
e
x
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
 
t
r
u
n
c
a
t
e
 
f
l
e
x
-
1
"
>
{
g
e
t
F
i
l
e
N
a
m
e
F
r
o
m
U
r
l
(
u
r
l
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
a
 
h
r
e
f
=
{
u
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
 
o
n
D
e
l
e
t
e
(
u
r
l
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
d
e
l
e
t
i
n
g
R
e
s
u
m
e
 
=
=
=
 
u
r
l
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
 
r
e
s
u
m
e
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
r
e
d
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
 
s
h
r
i
n
k
-
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
 
p
-
1
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
l
e
t
i
n
g
R
e
s
u
m
e
 
=
=
=
 
u
r
l
 
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
3
.
5
 
h
-
3
.
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
s
u
m
e
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
R
e
s
u
m
e
 
|
|
 
r
e
s
u
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
 
>
=
 
M
A
X
_
R
E
S
U
M
E
S
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
R
e
s
u
m
e
 
?
 
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
 
U
p
l
o
a
d
i
n
g
.
.
.
<
/
>
 
:
 
<
>
<
U
p
l
o
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
w
-
4
 
h
-
4
"
 
/
>
 
U
p
l
o
a
d
 
r
e
s
u
m
e
 
(
P
D
F
)
<
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
r
e
s
u
m
e
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
p
d
f
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
U
p
l
o
a
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
P
D
F
 
o
n
l
y
,
 
m
a
x
 
5
 
M
B
 
e
a
c
h
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


 
 
)
;


}


