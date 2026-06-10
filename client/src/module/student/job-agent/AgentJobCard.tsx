
i
m
p
o
r
t
 
R
e
a
c
t
 
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
 
A
r
r
o
w
R
i
g
h
t
,
 
W
i
f
i
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
 
M
o
n
i
t
o
r
 
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
 
J
o
b
F
e
e
d
M
a
t
c
h
 
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
 
P
r
o
p
s
 
{


 
 
j
o
b
:
 
J
o
b
F
e
e
d
M
a
t
c
h
[
"
j
o
b
"
]
;


}




c
o
n
s
t
 
W
O
R
K
_
M
O
D
E
_
C
O
N
F
I
G
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
 
t
y
p
e
o
f
 
W
i
f
i
 
}
>
 
=
 
{


 
 
R
E
M
O
T
E
:
 
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
m
o
t
e
"
,
 
i
c
o
n
:
 
W
i
f
i
 
}
,


 
 
H
Y
B
R
I
D
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
y
b
r
i
d
"
,
 
i
c
o
n
:
 
M
o
n
i
t
o
r
 
}
,


 
 
O
N
S
I
T
E
:
 
{
 
l
a
b
e
l
:
 
"
O
n
-
s
i
t
e
"
,
 
i
c
o
n
:
 
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
,


}
;




e
x
p
o
r
t
 
c
o
n
s
t
 
A
g
e
n
t
J
o
b
C
a
r
d
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
A
g
e
n
t
J
o
b
C
a
r
d
(
{
 
j
o
b
 
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
 
w
o
r
k
M
o
d
e
 
=
 
j
o
b
.
w
o
r
k
M
o
d
e
 
?
 
W
O
R
K
_
M
O
D
E
_
C
O
N
F
I
G
[
j
o
b
.
w
o
r
k
M
o
d
e
]
 
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
o
u
p
 
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
3
.
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
2
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
b
-
2
.
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
w
-
9
 
h
-
9
 
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
 
f
l
e
x
-
1
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
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
 
*
/
}


 
 
 
 
 
 
{
(
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
x
-
3
 
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
 
m
b
-
2
.
5
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
1
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
k
i
l
l
s
 
+
 
w
o
r
k
 
m
o
d
e
 
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
1
.
5
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
{
w
o
r
k
M
o
d
e
 
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
m
d
 
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
w
o
r
k
M
o
d
e
.
i
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
w
o
r
k
M
o
d
e
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


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
j
o
b
.
s
k
i
l
l
s
.
s
l
i
c
e
(
0
,
 
3
)
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
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
m
e
d
i
u
m
 
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
w
h
i
t
e
/
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
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


 
 
 
 
 
 
 
 
{
j
o
b
.
s
k
i
l
l
s
.
l
e
n
g
t
h
 
>
 
3
 
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


 
 
 
 
 
 
 
 
 
 
 
 
+
 
{
j
o
b
.
s
k
i
l
l
s
.
l
e
n
g
t
h
 
-
 
3
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
/
*
 
A
p
p
l
y
 
l
i
n
k
 
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
i
c
a
t
i
o
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
j
o
b
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
m
t
-
a
u
t
o
 
g
r
o
u
p
/
c
t
a
 
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
 
w
-
f
u
l
l
 
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
9
5
0
 
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


 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
a
n
d
 
a
p
p
l
y


 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
 
h
-
3
 
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
c
t
a
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
;


}
)
;


